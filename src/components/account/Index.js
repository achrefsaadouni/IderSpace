import React, {Component} from "react";
import {Link} from "react-router-dom";
import {getCurrentProfile, addResume, setLinkedIn} from "../../store/actions/profileActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Spinner from "../common/Spinner";
import ListSkills from "../recommandation/listSkills";
import Profile from "./profile";
import {Line, Circle} from 'rc-progress';
import Modal from 'react-responsive-modal';
import SetLanguage from './setLanguage';
import SetHobbies from './setHobbies';
import SetInformation from './setInformation';
import Finish from './finishing';
import About from './about';
import Header from './header';
import Activities from './activities';
import Video from './video';
import Photo from './photo'
import axios from "axios";
import io from 'socket.io-client';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const socket = io('http://localhost:2500');


async function verifyExistanceBool(tab, val) {
    return new Promise((resolve) => {
        var etat = false;
        for (const element of tab) {
            if (element === val) {
                etat = true
            }
        }
        return resolve(etat);
    });
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pourcentage: 0,
            open: false,
            idHobbie: [],
            language: [],
            hobbie: '',
            about: '',
            urlLinkedIn: '',
            urlFacebook: '',
            firstlogin: this.props.profile.firstlogin,
            responseService: '',
            currentInterface: '',
            currentProfileImage: '',
            currentWallPaper:'',
            activityRequest: this.props.profile.activityRequest,
            etat: false,
            valReqNotif:0,
        };
        this.onClick = this.onClick.bind(this);
        this.messageReceive = this.messageReceive.bind(this);
        this.notificationDOMRef = React.createRef();

    }

    componentDidMount() {
        this.props.getCurrentProfile();
        socket.on('userRecieve', this.messageReceive);
    }

    messageReceive(msg) {
        this.addNotification();
        this.setState({valReqNotif: this.state.valReqNotif+1})
    }



    addNotification() {
        this.notificationDOMRef.current.addNotification({
            title: "Attention",
            message: "You have new Activity!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {duration: 8000},
            dismissable: {click: true}
        });
    }

    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    onChange = e => {

    };
    onClick = e => {
        this.setState({pourcentage: e});

    };
    onAddIdToList = e => {
        console.log('----'+e);
        this.setState({idHobbie: [...this.state.idHobbie, e]})
    };
    onAddIdToListLanguage = async e => {
        var etat = await verifyExistanceBool(this.state.language, e);
        if (etat === false) {
            this.setState({language: [...this.state.language, e]})
        } else {
            const newListLanguage = this.state.language.filter(langue => langue !== e);
            this.setState({language: newListLanguage})

        }

    };
    OnAddAbout = e => {
        this.setState({about: e})
    };
    OnAddLinkedIn = e => {
        this.setState({urlLinkedIn: e})
    };
    OnAddFacebook = e => {
        this.setState({urlFacebook: e})
    };
    onClickFinish = e => {
        var {profile} = this.props.profile;
        console.log('clicked finish');
        this.props.addResume(this.state.idHobbie, this.state.about, this.state.language, this.state.urlFacebook);
        this.setState({firstlogin: true});
        setTimeout(() => {
            this.props.setLinkedIn(this.state.urlLinkedIn)
        }, 300);
        if (this.state.firstlogin === true || profile.firstLogin === true) {
            this.props.getCurrentProfile();
            console.log('dkhalt wlh')
        }

    };

    onActionActivity = (etat, id) => {
        /*console.log('wsel lel index');
        var {profile} = this.props.profile;
        if (this.state.activityRequest.length ===0){
            this.setState({activityRequest : profile});
            console.log('dkhal lel if');
        }*/
        var idd = '"' + id + '"';
        if (!this.state.etat) {
            var {profile} = this.props.profile;
            this.setState({
                activityRequest: profile.activityRequest,
                etat: true
            });


        }
        axios({
            method: 'post',
            url: 'http://localhost:2500/api/user/manageActivityRequest',
            data: {idActiv: id, repUser: etat},

        }).then(() => {
            var newactiv = this.state.activityRequest.filter(ac => ac.idActivity !== id);
            this.setState({
                activityRequest: newactiv,
                etat: true
            })
        })

    }

    onChangePhoto = e => {
        console.log('eee')
        console.log(e)
        this.setState({currentProfileImage: e});
    };

    onChangewallpaper = e => {
        this.setState({currentWallPaper:e})
    }
    getInterface = e => {
        this.setState({
            currentInterface: e
        })
    };


    render() {

        if (this.props.profile.url === null && this.state.firstlogin === true) {
            return <Spinner/>;

        }
        var currentImage = '';
        var currentWalpaper='';
        //console.log(currentProfileImage)
        const {profile, loading} = this.props.profile;
        if (this.state.currentProfileImage !== '') {
            currentImage = profile.profileImage;
        } else {
            currentImage = this.state.currentProfileImage;
        }

        if (this.state.currentWallPaper !== '') {
            currentWalpaper = profile.couverturePhoto;
        } else {
            currentWalpaper = this.state.currentWallPaper;
        }
        const {url} = this.props;
        const {hobbie} = this.state;


        if (profile === null || loading) {
            return <Spinner/>;
        }

        let skills;
        let languages;
        let hobbies;
        let experiences;
        let about;

        try {
            about = profile.Resume.about;
        } catch (err) {
            about = "no data";
        }

        try {
            skills = profile.Resume.Skills.map(item => item.name + ", ");
        } catch (err) {
            skills = "no skills";
        }

        try {
            languages = profile.Resume.languages.map(item => item + ", ");
        } catch (err) {
            languages = "no languages";
        }

        try {
            hobbies = profile.Resume.hobbies.map(item => item + ", ");
        } catch (err) {
            hobbies = "no hobbies";
        }

        try {
            experiences = profile.Resume.experiences.map(item => (
                <React.Fragment>
                    {item.name} <br/>
                    {item.description} <br/>
                    {item.start_date} <br/>
                    {item.end_date} <br/>
                    {item.end_date}
                </React.Fragment>
            ));
        } catch (err) {
            experiences = "no experiences";
        }
        let headerInterface = [];
        if (this.state.currentProfileImage === '') {
            if (this.state.currentWallPaper ===''){
            headerInterface =
                <Header setInterface={this.getInterface.bind(this)} valReq={this.state.valReqNotif} image={profile.profileImage} wallpaper={profile.couverturePhoto} profile={profile}/>}else{
                headerInterface =
                    <Header setInterface={this.getInterface.bind(this)} valReq={this.state.valReqNotif} image={profile.profileImage} wallpaper={this.state.currentWallPaper} profile={profile}/>
            }
        } else {
            if (this.state.currentWallPaper === ''){
            headerInterface = <Header setInterface={this.getInterface.bind(this)} valReq={this.state.valReqNotif} image={this.state.currentProfileImage}
                                      wallpaper={profile.couverturePhoto}       profile={profile}/>} else {
                headerInterface = <Header setInterface={this.getInterface.bind(this)} valReq={this.state.valReqNotif} image={this.state.currentProfileImage}
                                          wallpaper={this.state.currentWallPaper}       profile={profile}/>
            }
        }
        let Interface = [];
        if (this.state.pourcentage === 0) {
            Interface = <SetLanguage key={this.state.pourcentage} pourcentage={this.state.pourcentage}
                                     listLanguages={this.state.language}
                                     addToListLangue={this.onAddIdToListLanguage.bind(this)}
                                     onClick={this.onClick.bind(this)} onChange={this.onChange.bind(this)}/>
        } else if (this.state.pourcentage === 35) {
            Interface =
                <SetHobbies onClick={this.onClick.bind(this)} addIdToList={this.onAddIdToList.bind(this)}
                            getIdHobbies={this.state.idHobbie}/>
        } else if (this.state.pourcentage === 60) {
            console.log('dkhal lel 60');
            Interface = <SetInformation onClick={this.onClick.bind(this)} onaddFb={this.OnAddFacebook.bind(this)}
                                        onaddAbout={this.OnAddAbout.bind(this)} linkedIn={this.state.urlLinkedIn}
                                        fb={this.state.urlFacebook} about={this.state.about}
                                        onaddLinkedIn={this.OnAddLinkedIn.bind(this)}/>
        } else {
            Interface = <Finish onClick={this.onClickFinish.bind(this)}/>
        }


        if (this.state.firstlogin === true || profile.firstLogin === true) {
            if (this.state.currentInterface === '') {
                return (
                    <React.Fragment>
                        <ReactNotification ref={this.notificationDOMRef}/>
                        <div className="header-spacer"/>
                        {headerInterface}
                        <Profile onchangeWallpaper={this.onChangewallpaper.bind(this)} onchangePhotoProfile={this.onChangePhoto.bind(this)} key={profile.id} profile={profile}
                                 about={about} skills={skills} hobbies={hobbies}/>
                    </React.Fragment>
                );
            } else if (this.state.currentInterface === 'about') {
                return (
                    <React.Fragment>
                        <ReactNotification ref={this.notificationDOMRef}/>
                        <div className="header-spacer"/>
                        {headerInterface}
                        <About profile={profile}/>
                    </React.Fragment>
                );
            } else if (this.state.currentInterface === 'activities') {
                if (!this.state.etat) {
                    return (
                        <React.Fragment>
                            <ReactNotification ref={this.notificationDOMRef}/>
                            <div className="header-spacer"/>
                            {headerInterface}
                            <Activities onActionOnActivity={this.onActionActivity.bind(this)} profile={profile}
                                        etat={this.state.etat}/>
                        </React.Fragment>
                    );
                } else {
                    return (
                        <React.Fragment>
                            <ReactNotification ref={this.notificationDOMRef}/>
                            <div className="header-spacer"/>
                            {headerInterface}
                            <Activities onActionOnActivity={this.onActionActivity.bind(this)}
                                        profile={this.state.activityRequest} etat={this.state.etat}/>
                        </React.Fragment>
                    );
                }
            } else if (this.state.currentInterface === 'video') {
                return (
                    <React.Fragment>
                        <ReactNotification ref={this.notificationDOMRef}/>
                        <div className="header-spacer"/>
                        {headerInterface}
                        <Video/>
                    </React.Fragment>
                );
            } else if (this.state.currentInterface === 'photo'){
                return (
                    <React.Fragment>
                        <ReactNotification ref={this.notificationDOMRef}/>
                        <div className="header-spacer"/>
                        {headerInterface}
                        <Photo profile={profile}/>
                    </React.Fragment>
                );
            }
        } else {
            return (
                <React.Fragment>
                    <ReactNotification ref={this.notificationDOMRef}/>
                    <div className="main-header">
                        <div className="content-bg-wrap bg-badges"/>
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                                    <div className="main-header-content">
                                        <h1>Welcome to IderSpace!</h1>
                                        <p><br/><br/></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img className="img-bottom" src="img/badges-bottom.png" alt="friends"/>
                    </div>
                    <div className="container mb60">
                        <div className="row">
                            <div className="col col-xl-8 m-auto col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="ui-block">
                                    <article className="hentry blog-post single-post single-post-v1">
                                        <center><h1 className="post-title">Get Started With Iderspace!</h1></center>
                                        <Line percent={this.state.pourcentage} strokeWidth="4" strokeColor="#00BFFF"/>
                                        <nav aria-label="Page navigation">
                                            {Interface}

                                        </nav>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <div className="modal-content">
                            <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                                <svg className="olymp-close-icon">
                                    <use href="#olymp-close-icon"/>
                                </svg>
                            </a>


                        </div>
                    </Modal>
                </React.Fragment>
            );
        }
    }
}

Index.propTypes = {
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        profile: state.profile
    };
};

export default connect(
    mapStateToProps,
    {getCurrentProfile, addResume, setLinkedIn}
)(Index);
