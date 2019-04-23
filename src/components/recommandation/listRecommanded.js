import React, {Component} from 'react';
import {getRecommandation} from "../../store/actions/recommandationAction";
import {connect} from "react-redux";
import Spinner from "../common/Spinner";
import {loginUser} from "../../store/actions/authActions";
import PropTypes from "prop-types";
import RecommandedUser from "./recommandedUser";


class ListRecommanded extends Component {
    componentDidMount() {
        //this.props.getRecommandation();
    }

    constructor() {
        super()
        this.state = {
            tab: []
        }
    }


    render() {
        const {loading, recommandation} = this.props.recommandation

        if (recommandation === null || loading) {
            return <Spinner/>;
        }
        let BestUser = [];
        var BestUserInterface;
        let MayBeRecommandedUser = [];
        var MayBeRecommandedInterface;
        if (!loading) {
            BestUser = this.props.recommandation.recommandation.Recommended.map(user => (
                <RecommandedUser enabled={true} key={user._id} user={user}/>
            ));
            MayBeRecommandedUser = this.props.recommandation.recommandation.MayBeRecommended.map(user => (
                <RecommandedUser key={user._id} user={user}/>
            ));
        }
        if (this.props.recommandation.recommandation.Recommended.length !== 0) {
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

        if (this.props.recommandation.recommandation.MayBeRecommended.length !== 0) {
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
                    <div className="content-bg-wrap bg-account"/>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                                <div className="main-header-content">
                                    <h1>Customize your Profile!</h1>
                                    <p>Welcome to your account dashboard! Here you’ll find everything you need to change
                                        your profile
                                        information, settings, read notifications and requests, view your latest
                                        messages, change your pasword and much
                                        more! Also you can create or manage your own favourite page, have fun!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="img-bottom" src="img/account-bottom.png" alt="friends"/>
                </div>
                <div className="container">
                    <div className="row">
                        {BestUserInterface}
                        {BestUser}
                        {MayBeRecommandedInterface}
                        {MayBeRecommandedUser}

                    </div>

                </div>

            </React.Fragment>
        );
    }
}

ListRecommanded.propTypes = {
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
)(ListRecommanded);