import React, {Component} from 'react';
import {getSupervisors} from "../../store/actions/activityActions";
import {connect} from "react-redux";
import Spinner from "../common/Spinner";
import PropTypes from "prop-types";
import ProgressBar from "react-bootstrap/ProgressBar";




class step3 extends Component {
    continue = e => {
        e.preventDefault();
        // this.props.getRecommandation(e);


        this.props.nextStep();



    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    componentDidMount() {

        this.props.getSupervisors();
    }

    constructor() {
        super()
        this.state = {
            tab: []
        }
    }


    render() {

        const {loading, supervisors} = this.props.activity
        const { values, handleChange } = this.props;
        if (supervisors === null || loading) {
            return <Spinner/>;
        }

        const supervisorsList=supervisors.result.map((e)=>
            <li key={e._id}>
                <div className="author-thumb">
                    <img src="/img/avatar15-sm.jpg" alt="author"/>
                </div>
                <div className="notification-event">
                    <a href="#" className="h6 notification-friend">{e.firstname} {e.lastname}</a>
                    <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                </div>
                <span className="notification-icon">
											<button onClick={handleChange('supervisor')} className="accept-request">
												<span className="icon-add">
													<svg className="olymp-happy-face-icon"><use
                                                        xlinkHref="#olymp-happy-face-icon"></use></svg>
												</span>
												Pick him
											</button>

											<a href="#" className="accept-request request-del">
												<span className="icon-minus">
													<svg className="olymp-happy-face-icon"><use
                                                        xlinkHref="#olymp-happy-face-icon"></use></svg>
												</span>
											</a>

										</span>

                <div className="more">
                    <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon"></use>
                    </svg>
                    <svg className="olymp-little-delete">
                        <use xlinkHref="#olymp-little-delete"></use>
                    </svg>
                </div>
            </li>
        );


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
                            <ProgressBar now={60} label={`60%`} animated  />
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Create a new Activity : Step 3</h6>
                                    <a href="#" className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>
                                </div>


                                <br/>
                                <br/>

                                <ul className="notification-list friend-requests">
                                    {supervisorsList}


                                </ul>
                                <br/>
                                <br/>
                                <div className="row">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <button onClick={this.back} className="btn btn-secondary btn-lg full-width">Previous</button>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                    <button   onClick={this.continue} className="btn btn-primary btn-lg full-width">Continue</button>

                                </div>
                                </div>

                            </div>

                        </div>


                    </div>


                </div>

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
    {getSupervisors}
)(step3);