import React, {Component} from "react";
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Confirm from "./confirm"
import Success from "./success"
import swal from "sweetalert";

export default class create extends Component {
    state = {
        shown: false,
        replaceButton: false,
        step: 1,
        title: '',
        modules: [],
        description: '',
        EstimatedTime: '',
        descriptionDocument: '',
        techs: [],
        type: '',
        generalProgress: 0,
        creator: '',
        supervisor: "",
        members: []
    };
    // Proceed to next step
    goStep = (x) => {

        this.setState({
            step: x
        });
    };
    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };
    // Go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };
    membersChange = (input, val) => e => {
        return val !== "";


    };
    disabledButton = (e) => {

        if (this.state.members!==[])
        {
            return this.state.members.includes(e);
        }
        else{
        return false
        }
    };
    // Handle fields change
    handleChange = input => e => {
        if (input === "delMember") {
            this.state.members.splice(this.state.members.indexOf(e.target.value), 1)
            var el = document.getElementById("del"+e.target.value);
            el.hidden=true
            var el1 = document.getElementById(e.target.value);
            el1.hidden=false
            swal("Oops!", "Request invitation for this member was canceled!", "success");
        }
        if (input === "delete") {
            this.setState({["supervisor"]: ""});
            this.setState({replaceButton: false});

            swal("Oops!", "Request invitation for this supervisor was canceled!", "success");

        }
        if (input === "supervisor") {
            this.setState({[input]: e.target.value});
            this.setState({replaceButton: true});
            swal("Great!", "Request invitation for this supervisor was sent!", "success");

        }
        if (input === "members") {
            var el = document.getElementById(e.target.value);
            el.hidden=true
            var el1 = document.getElementById("del"+e.target.value);
            el1.hidden=false

        this.state.members.push(e.target.value)

            swal("Great!", "Request invitation for this member was sent!", "success");
        }
        else if (input === "shown") {
            this.state.shown = true
        }

        else {
            this.setState({[input]: e.target.value});
        }

        /* let files = e.target.files;
         let reader = new FileReader();
         reader.readAsDataURL(files[0])
         reader.onload = (e) => {

             this.state.descriptionDocument = e.target.result
             console.log(this.state.descriptionDocument)
         }*/
    };

    constructor() {
        super()
        this.changeRouteToList = this.changeRouteToList.bind(this);
    }

    changeRouteToList() {
        this.props.history.push("/activity")
    }

    onchange(e) {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {

            this.state.descriptionDocument = e.target.result
            console.log(this.state.descriptionDocument)
        }
    }

    render() {
        const user = this.props.user;
        const {step} = this.state;
        const {
            title,
            shown,
            replaceButton,
            modules,
            description,
            EstimatedTime,
            descriptionDocument,
            techs,
            type,
            generalProgress,
            creator,
            supervisor,
            members
        } = this.state;
        const values = {
            title,
            shown,
            replaceButton,
            modules,
            description,
            EstimatedTime,
            descriptionDocument,
            techs,
            type,
            generalProgress,
            creator,
            supervisor,
            members
        };
        switch (step) {
            case 1:
                return (
                    <Step1
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Step2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        disabledButton={this.disabledButton}
                        goStep={this.goStep}

                    />
                );
            case 3:
                return (
                    <Step3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (<Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}

                />);
            case 5:
                return (<Success
                    changeRouteToList={this.changeRouteToList}
                    values={values}
                />);

        }
    }
}