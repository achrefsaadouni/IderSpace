import React, {Component} from 'react';
import {getMembersList} from "../../store/actions/activityActions";
import {connect} from "react-redux";
import Spinner from "../common/Spinner";
import ProgressBar from "react-bootstrap/ProgressBar";



class confirm extends Component {

        continue = e => {
        e.preventDefault();


        this.props.nextStep();


    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    constructor() {
        super()
        this.state = {
            tab: []
        }
    }

    componentDidMount() {
        const {values, handleChange} = this.props;
        this.props.getMembersList(values.members);
    }

    render() {
        var ListOfMembers
        const {loading, membersList} = this.props.activity
        const {values, handleChange} = this.props;
        if (loading && membersList==null) {
            return <Spinner/>;
        }

                if(membersList!=null){


              ListOfMembers=this.props.activity.membersList.result.map((e)=>
            <div key={e._id}
                                                            className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">


                                                            <div className="crumina-module crumina-teammembers-item">

                                                                <div className="teammembers-thumb">
                                                                    <img className="main" src="/img/team1.jpg"
                                                                         alt="team member"/>
                                                                    <img className="hover" src="/img/team1.jpg"
                                                                         alt="team member"/>
                                                                </div>

                                                                <div className="teammember-content">

                                                                    <a href ="#" className="h5 teammembers-item-name">{e.firstname} {e.lastname}</a>
                                                                    {e.Resume.about!=""&&
                                                                    <div className="teammembers-item-prof">{e.Resume.about}
                                                                    </div>
                                                                    }
                                                                    {e.Resume.about==""&&
                                                                    <div className="teammembers-item-prof">Team Member
                                                                    </div>
                                                                    }
                                                                    <ul className="socials socials--round">
                                                                        <li>
                                                                            <a href="#" className="social-item olympus">
                                                                                <svg className="olymp-thunder-icon">
                                                                                    <use
                                                                                        xlinkHref="#olymp-thunder-icon"/>
                                                                                </svg>
                                                                            </a>
                                                                        </li>

                                                                        <li>
                                                                            <a href={e.linkedin}
                                                                               target="_blank"
                                                                               className="social-item linkedin">
                                                                                <svg viewBox="0 0 16 16"
                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                     fillRule="evenodd"
                                                                                     clipRule="evenodd"
                                                                                     strokeLinejoin="round"
                                                                                     strokeMiterlimit="1.414">
                                                                                    <path
                                                                                        d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                                                                                        fillRule="nonzero"/>
                                                                                </svg>
                                                                            </a>
                                                                        </li>

                                                                        <li>
                                                                            <a href="#" className="social-item twitter">
                                                                                <svg viewBox="0 0 16 16"
                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                     fillRule="evenodd"
                                                                                     clipRule="evenodd"
                                                                                     strokeLinejoin="round"
                                                                                     strokeMiterlimit="1.414">
                                                                                    <path
                                                                                        d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
                                                                                        fillRule="nonzero"/>
                                                                                </svg>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>


                                                        </div>
        );

                }

        return (
            <React.Fragment>
                <div className="header-spacer header-spacer-small"/>
                <div className="main-header">
                    <div className="content-bg-wrap bg-account"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                                <div className="main-header-content">
                                    <h1>IderSpace Activity</h1>
                                    <p>Welcome to your Space! Here you’ll find news about the latest features of your
                                        network,activities,
                                        connect to your activity's members smoothly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="img-bottom" src="/img/blog_bottom.png" alt="friends"/>
                </div>
                <div className="container">

                    <div className="row">
                        <div
                            className="col col-xl-12 order-xl-2 col-lg-12 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                            <ProgressBar now={80} label={`80%`} animated  />
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Create a new Activity : Confirm</h6>
                                    <a href="#" className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>
                                </div>


                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                <section
                                    className="align-right pt160 pb80 section-move-bg call-to-action-animation scrollme">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col col-xl-10 m-auto col-lg-10 col-md-12 col-sm-12 col-12">
                                                <a href="#" className="btn btn-primary btn-lg" data-toggle="modal"
                                                   data-target="#registration-login-form-popup">Check your Activity Before Creation!
                                                    <div className="ripple-container"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="first-img" alt="guy" src="/img/guy.png"
                                         style={{opacity: 1, bottom: "0px", transform: "scale(1)"}}/>
                                    <img className="second-img" alt="rocket" src="/img/rocket1.png"
                                         style={{opacity: 1, bottom: "50%", right: "40%"}}/>
                                    <div className="content-bg-wrap bg-section1"></div>
                                </section>


                                <br/>
                                <br/>
                                <div className="row">
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <button onClick={this.back}
                                                className="btn btn-secondary btn-lg full-width">Previous
                                        </button>
                                    </div>
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                        <button onClick={this.continue}
                                                className="btn btn-primary btn-lg full-width">Create
                                        </button>

                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>


                </div>

                {/* Start Activity Details Modal*/}
                <div className="modal fade" id="registration-login-form-popup" tabIndex="-1"
                     role="dialog" aria-labelledby="registration-login-form-popup"
                     style={{display: "none"}}>
                    <div className="modal-dialog window-popup registration-login-form-popup"
                         role="document">
                        <div className="modal-content">
                            <a href="#" className="close icon-close" data-dismiss="modal"
                               aria-label="Close">
                                <svg className="olymp-close-icon">
                                    <use xlinkHref="#olymp-close-icon"></use>
                                </svg>
                            </a>
                            <div className="modal-body" style={{width: "150%"}}>
                                <div className="registration-login-form" style={{}}>

                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active show" data-toggle="tab"
                                               href="#home1" role="tab" aria-selected="true">
                                                <svg className="olymp-login-icon">
                                                    <use xlinkHref="#olymp-login-icon"></use>
                                                </svg>
                                                <div className="ripple-container"></div>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#profile1"
                                               role="tab" aria-selected="false">
                                                <svg className="olymp-register-icon">
                                                    <use xlinkHref="#olymp-register-icon"></use>
                                                </svg>
                                                <div className="ripple-container"></div>
                                            </a>
                                        </li>
                                    </ul>


                                    <div className="tab-content" style={{marginLeft: "50px"}}>
                                        <div className="tab-pane active show" id="home1" role="tabpanel"
                                             data-mh="log-tab" style={{}}>
                                            <div className="title h6">Your Activity Details</div>
                                            <form className="content">
                                                <div className="row">
                                                    <div
                                                        className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div
                                                            className="form-group label-floating is-empty">
                                                            <label className="control-label">Activity
                                                                Title</label>
                                                            <input className="form-control"
                                                                  defaultValue={values.title} onChange={handleChange('title')} placeholder="" type="text"/>
                                                            <span className="material-input"></span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">

                                                        <div
                                                            className="form-group label-floating is-empty">

                                                            <select disabled={true}>
                                                                <option>{values.type}</option>
                                                            </select>
                                                            <span className="material-input"/>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">

                                                        <div
                                                            className="form-group label-floating is-empty">
                                                            <label
                                                                className="control-label">Description</label>
                                                            <textarea className="form-control"
                                                                      defaultValue={values.description}
                                                                      onChange={handleChange('description')}
                                                                      placeholder=""
                                                                      type="text"/>
                                                            <span className="material-input"/>
                                                        </div>

                                                        <div className="remember">
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input name="optionsCheckboxes"
                                                                           type="checkbox"/><span
                                                                    className="checkbox-material"><span
                                                                    className="check"/></span>
                                                                    I accept the <a href="#">Terms
                                                                    and Conditions</a> of the
                                                                    website
                                                                </label>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="tab-pane" id="profile1" role="tabpanel"
                                             data-mh="log-tab" style={{}}>
                                            <div className="title h6">Meet Your Activity members</div>
                                            <form className="content">
                                                <div className="row">
                                                    <div className="row teammembers-wrap">

                                                        {ListOfMembers}




                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Activity Details Modal*/}


            </React.Fragment>

        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    activity: state.activity

});

export default connect(
    mapStateToProps,
    {getMembersList}
)(confirm);