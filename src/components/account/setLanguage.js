import React, {Component} from 'react';
import {Line} from "rc-progress";

class SetLanguage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.onChange = this.onChange.bind(this);

    }


    onChange =  e => {
        this.props.onChange(e);
        this.props.addToListLangue(e.target.value);
    }
    onClick = e =>{
        this.props.onClick(35);
    }
    render() {

        let InterfaceEnglish = [];
        let InterfaceFrench = [];
        let InterfaceArabic = [];
        let InterfaceItalien = [];
        let InterfaceDeutsch = [];
        let InterfaceTurc = [];
        var boolEnglish = false;
        var boolFrench = false;
        var boolArabic = false;
        var boolItalien = false;
        var boolDeutsch = false;
        var boolTurc = false;
        var listLanguagesFromIndex = this.props.listLanguages;
        for(let i=0 ; i<listLanguagesFromIndex.length;i++){
            if (listLanguagesFromIndex[i] === 'English'){
                boolEnglish = true
            }
            if (listLanguagesFromIndex[i] === 'French'){
                boolFrench = true
            }
            if (listLanguagesFromIndex[i] === 'Arabic'){
                boolArabic = true
            }
            if (listLanguagesFromIndex[i] === 'Italien'){
                boolItalien = true
            }
            if (listLanguagesFromIndex[i] === 'Deutsch'){
                boolDeutsch = true
            }
            if (listLanguagesFromIndex[i] === 'Turc'){
                boolTurc = true
            }
        }
        if (boolEnglish === false){
        InterfaceEnglish = React.createElement("div", {
            className: "col col-lg-3 col-md-6 col-sm-6 col-6"
        }, React.createElement("div", {
            className: "ui-block"
        }, React.createElement("div", {
            className: "available-widget"
        }, React.createElement("div", {
            className: "checkbox"
        }, React.createElement("label", null, React.createElement("input", {
            name: "optionsCheckboxes",
            checked: false,
            onChange: this.onChange.bind(this),
            value: "English",
            type: "checkbox"
        }), React.createElement("span", {
            className: "checkbox-material"
        }, React.createElement("span", {
            className: "check"
        })), "English")))));}else{
            InterfaceEnglish = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", '', React.createElement("input", {
                name: "optionsCheckboxes",
                checked: true,
                onChange: this.onChange.bind(this),
                value: "English",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "English")))));
        }
        if (boolFrench === false){
            InterfaceFrench = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", null, React.createElement("input", {
                name: "optionsCheckboxes",
                checked: false,
                onChange: this.onChange.bind(this),
                value: "French",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "French")))));}else{
            InterfaceFrench = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", '', React.createElement("input", {
                name: "optionsCheckboxes",
                checked: true,
                onChange: this.onChange.bind(this),
                value: "French",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "French")))));
        }
        if (boolArabic === false){
            InterfaceArabic = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", null, React.createElement("input", {
                name: "optionsCheckboxes",
                checked: false,
                onChange: this.onChange.bind(this),
                value: "Arabic",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "Arabic")))));}else{
            InterfaceArabic = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", '', React.createElement("input", {
                name: "optionsCheckboxes",
                checked: true,
                onChange: this.onChange.bind(this),
                value: "Arabic",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "Arabic")))));
        }
        if (boolDeutsch === false){
            InterfaceDeutsch = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", null, React.createElement("input", {
                name: "optionsCheckboxes",
                checked: false,
                onChange: this.onChange.bind(this),
                value: "Deutsch",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "Deutsch")))));}else{
            InterfaceDeutsch = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", '', React.createElement("input", {
                name: "optionsCheckboxes",
                checked: true,
                onChange: this.onChange.bind(this),
                value: "Deutsch",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "Deutsch")))));
        }
        if (boolItalien === false){
            InterfaceItalien = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", null, React.createElement("input", {
                name: "optionsCheckboxes",
                checked: false,
                onChange: this.onChange.bind(this),
                value: "Italien",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "Italien")))));}else{
            InterfaceItalien = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", '', React.createElement("input", {
                name: "optionsCheckboxes",
                checked: true,
                onChange: this.onChange.bind(this),
                value: "Italien",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "Italien")))));
        }
        if (boolTurc === false){
            InterfaceTurc = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", null, React.createElement("input", {
                name: "optionsCheckboxes",
                checked: false,
                onChange: this.onChange.bind(this),
                value: "Turc",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "Turc")))));}else{
            InterfaceTurc = React.createElement("div", {
                className: "col col-lg-3 col-md-6 col-sm-6 col-6"
            }, React.createElement("div", {
                className: "ui-block"
            }, React.createElement("div", {
                className: "available-widget"
            }, React.createElement("div", {
                className: "checkbox"
            }, React.createElement("label", '', React.createElement("input", {
                name: "optionsCheckboxes",
                checked: true,
                onChange: this.onChange.bind(this),
                value: "Turc",
                type: "checkbox"
            }), React.createElement("span", {
                className: "checkbox-material"
            }, React.createElement("span", {
                className: "check"
            })), "Turc")))));
        }




        return (
            <div>



                                        <div className="row">
                                            <div className="col col-xl-10 col-lg-10 col-md-12 col-sm-12  m-auto">


                                                <ul className="table-careers">


                                                    <li>
                                                        <center> <span className="type bold">Add your languages to show your strengths</span></center>
                                                    </li>


                                                </ul>

                                            </div>
                                            {InterfaceEnglish}
                                            {InterfaceFrench}
                                            {InterfaceArabic}
                                            {InterfaceItalien}
                                            {InterfaceTurc}
                                            {InterfaceDeutsch}


                                        </div>


                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                            </li>
                                            <li className="page-item">
                                                <button className="page-link" onClick={this.onClick.bind(this)} >Next</button>
                                            </li>
                                        </ul>

            </div>
        );
    }
}

export default SetLanguage;
