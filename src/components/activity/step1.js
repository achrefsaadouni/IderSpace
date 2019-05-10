import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {getRecommandation, getAllSkills} from "../../store/actions/recommandationAction";
import Spinner from "../common/Spinner";
import {AutoComplete} from 'primereact/autocomplete';
import StyleLinks from "./StyleLinks";
import swal from "sweetalert";
import ProgressBar from 'react-bootstrap/ProgressBar'


class step1 extends Component {
    continue = e => {
        console.log(this.props)
        if(this.state.shown===true){

            if(this.props.values.techs.length===0 ||this.props.values.title===""||this.props.values.description===""){
                e.preventDefault()

                swal("Oops!", "Please Fill all the fields in form and povide technologies for the recommandation system !", "error");
            }
        }
        if(this.state.shown===false){

            if(this.props.values.title===""||this.props.values.description==="" || this.props.values.type===""){
                e.preventDefault();

                swal("Oops!", "Please fill all the fields in Form to proceed!", "error");
            }
        }
        if(this.props.values.title!==""&&this.props.values.description!=="" && this.props.values.type!=="") {
            e.preventDefault();
            this.props.getRecommandation(this.state.techs);


            this.props.nextStep();

        }


    };

    constructor(props) {
        super(props);
        const {values} =this.props
        console.log(values)
        this.state = {
            shown:values.shown,
            countriesData: [],
            filteredCountriesMultiple: null
        };

        this.filterCountryMultiple = this.filterCountryMultiple.bind(this);
    }
    toggle(event) {
        if(event.target.value==="Academic"){
        this.setState({

            shown: true
        });
        }
        else {

            this.setState({
                shown: false
            });
        }

    }
    componentWillMount() {
        this.props.getAllSkills();

    }

pushToTechs(e){
    this.setState({countries:e})

}

    filterCountryMultiple(event) {
        setTimeout(() => {
            let results = this.state.countriesData.filter(country => {
                return country.toLowerCase().startsWith(event.query.toLowerCase());
            });

            this.setState({ filteredCountriesMultiple: results });
        }, 250);
    }


    render() {
        var shown = {
            display: this.state.shown ? "block" : "none"
        };

        var hidden = {
            display: this.state.shown ? "none" : "block"
        }

        const {loading, recommandation} = this.props.recommandation
        const { values, handleChange,changeRoute } = this.props;
        if (this.props.recommandation.allSkills === null || loading) {

            return <Spinner/>;
        }
        if(!loading){
            this.state.countriesData=this.props.recommandation.allSkills.devSkills
            //this.state.countriesData+=this.props.recommandation.allSkills.microsoftSkills
            //this.state.countriesData+=this.props.recommandation.allSkills.personalSkills
            //this.state.countriesData+=this.props.recommandation.allSkills.otherSkills

        }

        return (
            <React.Fragment>
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

                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <ProgressBar now={0} label={`0%`} animated  />
                            <div className="ui-block">
                                <div className="ui-block-title">
                                    <h6 className="title">Create a new Activity : Step 1</h6>
                                    <br/>


                                </div>
                                <div className="ui-block-content">





                                        <div className="row">


                                            {/*new fields*/}
                                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Activity Title</label>
                                                    <input className="form-control" placeholder="" type="text"
                                                           onChange={handleChange('title')}
                                                           defaultValue={values.title}
                                                    />
                                                        <span className="material-input"></span></div>
                                                <div className="form-group label-floating is-select">
                                                    <label className="control-label">Category</label>
                                                    <div >

                                                        <select onChange={this.toggle.bind(this)} onClick={handleChange('type')} defaultValue={values.type} >
                                                            <option value="Entertaining">Entertaining</option>
                                                            <option value="Volunteer">Volunteer</option>
                                                            <option value="Academic" >Academic</option>
                                                            <option value="Challenge">Challenge</option>
                                                            <option value="Professional">Professional</option>
                                                        </select></div>
                                                    <span className="material-input"></span></div>



                                            </div>

                                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Description document</label>
                                                    <input className="form-control" placeholder="" type="file"   defaultValue={values.descriptionDocument}/>
                                                    <span className="material-input"></span></div>
                                                <div className="form-group label-floating">
                                                    <StyleLinks />
                                                    <span className='p-fluid'>
					<AutoComplete
                        style={ shown }
                        value={values.techs}
                        suggestions={this.state.filteredCountriesMultiple}
                        completeMethod={this.filterCountryMultiple}
                        minLength={1}
                        placeholder='Technologies'
                        multiple={true}
                        defaultValue={values.techs}
                        onChange={handleChange('techs')}
                        onKeyUp={handleChange('shown')}


                    />
				</span>
                                                    <span className="material-input"></span></div>
                                            </div>








                                            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Full Description</label>
                                                    <textarea className="form-control" placeholder="write a description"
                                                              onChange={handleChange('description')}
                                                              defaultValue={values.description}
                                                    ></textarea>
                                                    <span className="material-input"></span></div>
                                            </div>






                                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                <button onClick={changeRoute} className="btn btn-secondary btn-lg full-width">Cancel</button>
                                            </div>
                                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                <button   onClick={this.continue} className="btn btn-primary btn-lg full-width">Continue</button>
                                            </div>
                                        </div>





                                </div>
                            </div>



                        </div>


                    </div>

                </div>


                <a className="back-to-top" href="#">
                    <img src="svg-icons/back-to-top.svg" alt="arrow" className="back-icon"/>
                </a>



            </React.Fragment>
        )

    }
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    recommandation: state.recommandation
});

export default connect(
    mapStateToProps,
    {getRecommandation, getAllSkills}
)(step1);