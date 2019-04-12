import React, {Component} from 'react';
import {getRecommandation} from "../../store/actions/recommandationAction";
import {connect} from "react-redux";
import {loginUser} from "../../store/actions/authActions";
import Spinner from "../common/Spinner";

async function verifyExistance(tab, val) {
    //console.log(val)
    return new Promise((resolve) => {
        var etat = true;
        for (const element of tab) {
            if (element === val) {
                var index = tab.indexOf(element);
                tab.splice(index, 1);
                etat = false
            }
        }
        if (etat === true) {
            tab.push(val)
        }
        return resolve(tab);
    });
}

class Recommandation extends Component {
    constructor() {
        super()
        this.state = {
            tab: []
        }
        this.onChange = this.onChange.bind(this);
    }


    onChange = async e => {
        var {tab} = this.state;
        const verify = await verifyExistance(tab, e.target.value).then(res => {
            console.log(res)
            //console.log(e.target.value)

            this.setState({
                tab: res
            })

        });
    }


    onSubmit = e => {
        this.props.getRecommandation(this.state.tab);
        this.props.history.push("/listReco");
    }

    render() {
     const   { loading, recommandation } = this.props.recommandation

        if (loading) {
            return <Spinner />;
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
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <div className="h6 title">Available Widgets</div>
                                    <a href="#" className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="ui-block">
                                    <div className="available-widget">

                                        <div className="checkbox">
                                            <label>
                                                <input name="optionsCheckboxes" value="React" type="checkbox"
                                                       onChange={this.onChange}/><span
                                                className="checkbox-material"></span>
                                                React
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="ui-block">
                                    <div className="available-widget">

                                        <div className="checkbox">
                                            <label>
                                                <input name="optionsCheckboxes" value="Angular" type="checkbox"
                                                       onChange={this.onChange}/><span
                                                className="checkbox-material"></span>
                                                Angular
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="ui-block responsive-flex">
                                    <div className="ui-block-title">
                                        <div className="h6 title">Profile Customization</div>
                                        <div className="align-right">
                                            <button
                                                className="btn btn-md-2 btn-border-think custom-color c-grey">Back
                                                to Preset Settings
                                            </button>
                                            <button onClick={this.onSubmit} className="btn btn-primary btn-md-2">Save all Changes</button>
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
    recommandation: state.recommandation
});

export default connect(
    mapStateToProps,
    { getRecommandation }
)(Recommandation);