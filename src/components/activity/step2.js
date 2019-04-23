import React, {Component} from 'react';
import {getRecommandation} from "../../store/actions/recommandationAction";
import {connect} from "react-redux";
import Spinner from "../common/Spinner";
import {loginUser} from "../../store/actions/authActions";
import PropTypes from "prop-types";
import RecUser from "./recUser";
import StyleLinks from "./StyleLinks";
import {AutoComplete} from "primereact/autocomplete";
import ProgressBar from "react-bootstrap/ProgressBar";



class step2 extends Component {

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
        //this.props.getRecommandation();
        const { values }    = this.props;

        this.props.getRecommandation(values.techs);
    }

    constructor() {
        super()

        this.state = {
            tab: []
        }
    }


    render() {
        const {loading, recommandation} = this.props.recommandation
        const { values, handleChange,disabledButton,goStep } = this.props;
        if (recommandation === null && loading) {
            return <Spinner/>;
        }
        let BestUser = [];
        var BestUserInterface;
        let MayBeRecommandedUser = [];
        var MayBeRecommandedInterface;
        if (!loading && recommandation!=null) {
            BestUser = this.props.recommandation.recommandation.Recommended.map(user => (
                <RecUser disabledButton={disabledButton} goStep={goStep} handleChange={handleChange} key={user._id} user={user}/>
            ));
            MayBeRecommandedUser = this.props.recommandation.recommandation.MayBeRecommended.map(user => (
                <RecUser disabledButton={disabledButton}  handleChange={handleChange} key={user._id} user={user}/>
            ));
        }
        if (this.props.recommandation.recommandation.Recommended!==null) {
            BestUserInterface = React.createElement("div", {
                className: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "ui-block-title"
            }, React.createElement("h6", {
                className: "title"
            }, "Best Recommandation"))));

        }

        if (this.props.recommandation.recommandation.MayBeRecommended!==null) {
            MayBeRecommandedInterface = React.createElement("div", {
                className: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "ui-block-title"
            }, React.createElement("h6", {
                className: "title"
            }, "May Be Recommanded"))));

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

                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <ProgressBar now={40} label={`40%`} animated  />
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Create a new Activity : Step 2</h6>
                            </div>
                            <div className="ui-block-content">





                                    <div className="row">



                                        <div className="row">
                                            {BestUserInterface}
                                            {BestUser}
                                            {MayBeRecommandedInterface}
                                            {MayBeRecommandedUser}

                                        </div>



                                        <div className="col col-lg-8 col-md-6 col-sm-12 col-12">
                                            <button onClick={this.back} className="btn btn-secondary btn-lg full-width">Previous</button>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
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

step2.propTypes = {
    getRecommandation: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    recommandation: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    recommandation: state.recommandation

});

export default connect(
    mapStateToProps,
    {getRecommandation}
)(step2);