import React, {Component} from "react";
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Confirm from "./confirm"
import Success from "./success"

export default class create extends Component {
    constructor(){
        super()
        this.changeRouteToList = this.changeRouteToList.bind(this);
    }
    state = {
        shown: false,
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
    changeRouteToList(){
        this.props.history.push("/activity")
    }

    // Handle fields change
    handleChange = input => e => {

        if(input==="members"){
               this.state.members.push(e.target.value)

        }
       else if(input==="shown"){
            this.state.shown=true
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
        const values = {title,
            shown,
            modules,
            description,
            EstimatedTime,
            descriptionDocument,
            techs,
            type,
            generalProgress,
            creator,
            supervisor,
            members};
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
                        onload={console.log(values)}
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
                return(<Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />);
            case 5:
                return(<Success
                    changeRouteToList={this.changeRouteToList}
                    values={values}
                />);

        }
    }
}