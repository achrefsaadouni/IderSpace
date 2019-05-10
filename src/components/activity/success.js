import React, {Component} from 'react';
import {connect} from "react-redux";
import Spinner from "../common/Spinner";
import {CreateActivity,} from "../../store/actions/activityActions";
import { Route } from 'react-router-dom'
import ProgressBar from "react-bootstrap/ProgressBar";



class success extends Component {
    componentDidMount(){
        const {values} = this.props;
        this.props.CreateActivity(values);
    }


    render() {
        const {loading} = this.props.activity
        const {changeRouteToList } = this.props;
        if (loading) {
           return <Spinner/>
        }
        if(!loading){

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

                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <ProgressBar now={100} label={`100%`} animated  />
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Create a new Activity : Success</h6>
                                </div>
                                <div className="ui-block-content">





                                    <div className="row">



                                        <div className="row">
                                            <div  style={{marginLeft:"30%"}}>
                                                <img style={{width:"100%",marginLeft:"4%" }} src="/img/happystate.gif"
                                                     alt="success"/>
                                                <br/>

                                            </div>

                                        </div>




                                        <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
                                            <button  onClick={changeRouteToList}  className="btn btn-primary btn-lg full-width">Go to Activities</button>
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
}



const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    activity: state.activity

});

export default connect(
    mapStateToProps,
    {CreateActivity}
)(success);