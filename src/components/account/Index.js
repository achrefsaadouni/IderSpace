import React, {Component} from "react";
import {Link} from "react-router-dom";
import {getCurrentProfile , addResume , setLinkedIn} from "../../store/actions/profileActions";
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
            idHobbie:[],
            language:[],
            hobbie:'',
            about:'',
            urlLinkedIn:'',
            urlFacebook:'',
            firstlogin:this.props.profile.firstlogin,
            responseService:''
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentProfile();
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
        this.setState({idHobbie:[...this.state.idHobbie,e]})
    };
    onAddIdToListLanguage = async e => {
        var etat = await verifyExistanceBool(this.state.language, e);
        if (etat === false){
        this.setState({language: [...this.state.language, e]})}
        else{
            const newListLanguage = this.state.language.filter(langue => langue !== e);
            this.setState({language: newListLanguage})

        }

    };
    OnAddAbout = e => {
        this.setState({about: e})
    };
    OnAddLinkedIn = e => {
        this.setState({urlLinkedIn : e})
    };
    OnAddFacebook = e => {
        this.setState({urlFacebook : e})
    };
    onClickFinish = e => {
        var {profile} = this.props.profile;
        console.log('clicked finish');
        this.props.addResume(this.state.idHobbie,this.state.about ,this.state.language);
        this.setState({firstlogin : true});
        setTimeout(()=> {this.props.setLinkedIn(this.state.urlLinkedIn)},300);
        if(this.state.firstlogin === true || profile.firstLogin === true){
            this.props.getCurrentProfile();
            console.log('dkhalt wlh')
        }

    }


    render() {

        if(this.props.profile.url === null && this.state.firstlogin === true){
            return <Spinner/>;

        }

        const {profile, loading} = this.props.profile;
        const {url} = this.props;
        const {hobbie} = this.state;
        console.log(this.props.profile);


        if (profile === null || loading) {
            return <Spinner/>;
        }

        console.log('-'+profile.firstLogin);
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
        let Interface = [];
        if (this.state.pourcentage === 0) {
            Interface = <SetLanguage key={this.state.pourcentage} pourcentage={this.state.pourcentage}
                   listLanguages={this.state.language}               addToListLangue={this.onAddIdToListLanguage.bind(this)}   onClick={this.onClick.bind(this)} onChange={this.onChange.bind(this)}/>
        } else if (this.state.pourcentage === 35) {
            Interface =
                <SetHobbies onClick={this.onClick.bind(this)} addIdToList={this.onAddIdToList.bind(this)} getIdHobbies={this.state.idHobbie}/>
        }else if (this.state.pourcentage === 60){
            console.log('dkhal lel 60');
           Interface = <SetInformation  onClick={this.onClick.bind(this)} onaddFb={this.OnAddFacebook.bind(this)} onaddAbout={this.OnAddAbout.bind(this)} linkedIn={this.state.urlLinkedIn} fb={this.state.urlFacebook} about={this.state.about} onaddLinkedIn={this.OnAddLinkedIn.bind(this)}/>
        }else{
            Interface = <Finish onClick={this.onClickFinish.bind(this)}/>
        }


        if (this.state.firstlogin === true || profile.firstLogin === true) {

            return (
                <React.Fragment>
                    <div className="header-spacer"/>
                    <Profile key={profile.id} profile={profile} about={about} skills={skills} hobbies={hobbies}/>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
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
    {getCurrentProfile , addResume , setLinkedIn}
)(Index);
