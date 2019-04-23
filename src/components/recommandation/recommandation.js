import React, {Component} from 'react';
import {getRecommandation, getAllSkills} from "../../store/actions/recommandationAction";
import {connect} from "react-redux";
import {loginUser} from "../../store/actions/authActions";
import ListSkills from "./listSkills";
import Spinner from "../common/Spinner";
import RecommandedUser from "./recommandedUser";

async function verifyExistance(tab, val) {
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

    componentWillMount() {
        this.props.getAllSkills();
    }

    render() {
        const {allSkills} = this.state;
        const {loading, recommandation } = this.props.recommandation

        if (this.props.recommandation.allSkills === null || loading) {
            return <Spinner/>;
        }
        var devSkills;
        var officeSkills;
        var personalSkills;
        var otherSkills;
        let devSkillsInterface = [];
        let officeSkillsInterface = [];
        let personalSkillsInterface = [];
        let otherSkillsInterface=[];
        if (!loading) {
            if (this.props.recommandation.allSkills.devSkills.length !== 0) {

                devSkills = React.createElement("div", {
                    className: "container"
                }, React.createElement("div", {
                    className: "row"
                }, React.createElement("div", {
                    className: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                }, React.createElement("div", {
                    className: "ui-block"
                }, React.createElement("div", {
                    className: "ui-block-title"
                }, React.createElement("div", {
                    className: "h6 title"
                }, "Developpement Skills"), React.createElement("a", {
                    href: "#",
                    className: "more"
                }, React.createElement("svg", {
                    className: "olymp-three-dots-icon"
                }, React.createElement("use", {
                    xlinkHref: "#olymp-three-dots-icon"
                }))))))));
                devSkillsInterface = this.props.recommandation.allSkills.devSkills.map(skill => (
                    <ListSkills key={skill.toString()} skill={skill} onChange={this.onChange.bind(this)}/>
                ));
            }
            if (this.props.recommandation.allSkills.microsoftSkills.length !== 0) {
                officeSkills = React.createElement("div", {
                    className: "container"
                }, React.createElement("div", {
                    className: "row"
                }, React.createElement("div", {
                    className: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                }, React.createElement("div", {
                    className: "ui-block"
                }, React.createElement("div", {
                    className: "ui-block-title"
                }, React.createElement("div", {
                    className: "h6 title"
                }, "Office Skills"), React.createElement("a", {
                    href: "#",
                    className: "more"
                }, React.createElement("svg", {
                    className: "olymp-three-dots-icon"
                }, React.createElement("use", {
                    xlinkHref: "#olymp-three-dots-icon"
                }))))))));
                officeSkillsInterface = this.props.recommandation.allSkills.microsoftSkills.map(skill => (
                    <ListSkills key={skill.toString()} skill={skill} onChange={this.onChange.bind(this)}/>
                ));
            }
            if (this.props.recommandation.allSkills.personalSkills.length !== 0) {
                personalSkills = React.createElement("div", {
                    className: "container"
                }, React.createElement("div", {
                    className: "row"
                }, React.createElement("div", {
                    className: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                }, React.createElement("div", {
                    className: "ui-block"
                }, React.createElement("div", {
                    className: "ui-block-title"
                }, React.createElement("div", {
                    className: "h6 title"
                }, "Personal Skills"), React.createElement("a", {
                    href: "#",
                    className: "more"
                }, React.createElement("svg", {
                    className: "olymp-three-dots-icon"
                }, React.createElement("use", {
                    xlinkHref: "#olymp-three-dots-icon"
                }))))))));
                personalSkillsInterface = this.props.recommandation.allSkills.personalSkills.map(skill => (
                    <ListSkills key={skill.toString()} skill={skill} onChange={this.onChange.bind(this)}/>
                ));
            }
            if (this.props.recommandation.allSkills.otherSkills.length !== 0) {
                otherSkills = React.createElement("div", {
                    className: "container"
                }, React.createElement("div", {
                    className: "row"
                }, React.createElement("div", {
                    className: "col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                }, React.createElement("div", {
                    className: "ui-block"
                }, React.createElement("div", {
                    className: "ui-block-title"
                }, React.createElement("div", {
                    className: "h6 title"
                }, "Other Skills"), React.createElement("a", {
                    href: "#",
                    className: "more"
                }, React.createElement("svg", {
                    className: "olymp-three-dots-icon"
                }, React.createElement("use", {
                    xlinkHref: "#olymp-three-dots-icon"
                }))))))));
                otherSkillsInterface = this.props.recommandation.allSkills.otherSkills.map(skill => (
                    <ListSkills key={skill.toString()} skill={skill} onChange={this.onChange.bind(this)}/>
                ));
            }

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
                                    <h1>choose the recommendation criteria</h1>
                                    <p>Welcome to the recommendation! Here you’ll define everything you need to find the
                                        perfect profile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="img-bottom" src="img/account-bottom.png" alt="friends"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block responsive-flex1200">
                                <div className="ui-block-title">
                                    <div className="w-select">
                                        <div className="title">Filter By:</div>
                                        <fieldset className="form-group">
                                            <div className="btn-group bootstrap-select form-control">

                                                <div className="dropdown-menu open" role="combobox"
                                                     x-placement="bottom-start" style={{
                                                    maxHeight: '363px',
                                                    overflow: 'hidden',
                                                    minHeight: '0px',
                                                    position: 'absolute',
                                                    transform: 'translate3d(0px, 40px, 0px)',
                                                    top: '0px',
                                                    left: '0px',
                                                    willChange: 'transform'
                                                }}>
                                                    <ul className="dropdown-menu inner" role="listbox"
                                                        aria-expanded="false" style={{
                                                        maxHeight: '345px',
                                                        overflowY: 'auto',
                                                        minHeight: '0px'
                                                    }}>
                                                        <li data-original-index={0} className="selected"><a tabIndex={0}
                                                                                                            className=" dropdown-item"
                                                                                                            style={{}}
                                                                                                            data-tokens="null"
                                                                                                            role="option"
                                                                                                            aria-disabled="false"
                                                                                                            aria-selected="true"><span
                                                            className="glyphicon glyphicon-ok check-mark"/></a></li>
                                                        <li data-original-index={1}><a tabIndex={0}
                                                                                       className=" dropdown-item"
                                                                                       style={{}} data-tokens="null"
                                                                                       role="option"
                                                                                       aria-disabled="false"
                                                                                       aria-selected="false"><span
                                                            className="glyphicon glyphicon-ok check-mark"/></a></li>
                                                        <li data-original-index={2}><a tabIndex={0}
                                                                                       className=" dropdown-item"
                                                                                       style={{}} data-tokens="null"
                                                                                       role="option"
                                                                                       aria-disabled="false"
                                                                                       aria-selected="false"><span
                                                            className="glyphicon glyphicon-ok check-mark"/></a></li>
                                                    </ul>
                                                </div>
                                                <select className="selectpicker form-control" tabIndex={-98}>
                                                    <option value="NU">All Categories</option>
                                                    <option value="NU">Favourite</option>
                                                    <option value="NU">Likes</option>
                                                </select></div>
                                            <span className="material-input"/></fieldset>
                                    </div>
                                    <a href="#" data-toggle="modal" data-target="#create-photo-album"
                                       className="btn btn-primary btn-md-2">Filter</a>
                                    <form className="w-search">
                                        <div className="form-group with-button is-empty">
                                            <input className="form-control" type="text"
                                                   placeholder="Search Blog Posts......"/>
                                            <button>
                                                <svg className="olymp-magnifying-glass-icon">
                                                    <use xlinkHref="#olymp-magnifying-glass-icon"/>
                                                </svg>
                                            </button>
                                            <span className="material-input"/></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {devSkills}

                <div className="container">
                    <div className="row">
                        {devSkillsInterface}
                    </div>
                </div>

                {officeSkills}

                <div className="container">
                    <div className="row">
                        {officeSkillsInterface}
                    </div>
                </div>

                {personalSkills}

                <div className="container">
                    <div className="row">
                        {personalSkillsInterface}
                    </div>
                </div>

                {otherSkills}

                <div className="container">
                    <div className="row">
                        {otherSkillsInterface}
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
                                        <button onClick={this.onSubmit} className="btn btn-primary btn-md-2">Find
                                            Recommanded Students
                                        </button>
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
    {getRecommandation, getAllSkills}
)(Recommandation);