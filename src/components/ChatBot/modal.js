import React, { Component } from "react";
const Swal = require('sweetalert2');




export default class Modal extends Component {


    constructor()
    {
        super();
        this.state = { inputs: [0] , responses : [0],intent : '',valQuestions : [] , valAnswers: []};
        this.addInput = this.addInput.bind(this);
        this.removeInput = this.removeInput.bind(this);
        this.addInputR = this.addInputR.bind(this);
        this.removeInputR = this.removeInputR.bind(this);
    }
    handleIntent(e)
    {
        this.setState( {
            intent :  e.target.value
        })
    }
    changeQuestionHandler(e)
    {
        e.preventDefault();
        this.state.valQuestions[e.target.name] = e.target.value;
    }

    changeAnswerHandler(e)
    {
        e.preventDefault();
        this.state.valAnswers[e.target.name] = e.target.value;
    }

    handleSubmit(e)
    {

        e.preventDefault();
        console.log(this.state);
        if(this.state.valAnswers.length ===0 || this.state.valAnswers.length===0 || this.state.intent === '')
        {
            Swal.fire(
                'Failed',
                'You need to fill the form first',
                'error'
            )
        }

        else if (this.state.valAnswers.length ===1 || this.state.valAnswers.length===1)
        {
            if (this.state.valAnswers.find(e => e==="") || this.state.valQuestions.find(e => e===""))
            {
                Swal.fire(
                    'Failed',
                    'You need atleast 1 non null question and answer',
                    'error'
                )
            }
            var trainingPhrases = [];
            var responses = [];
            for(var i in this.state.valQuestions)
            {
                trainingPhrases.push(i);
            }
            for (var i in this.state.valAnswers)
            {
                responses.push(i);
            }



        }
        else
        {
            console.log("else")
            var trainingPhrases = [];
            var responses = [];
            for(var i in this.state.valQuestions)
            {
                trainingPhrases.push(i);
            }
            for (var i in this.state.valAnswers)
            {
                responses.push(i);
            }

        }


    }



    addInput (e)
    {

                e.preventDefault();
                var newInput = this.state.inputs[this.state.inputs.length-1]  + 1;
                if(isNaN(newInput))
                     newInput = 0;
                this.setState( { inputs: this.state.inputs.concat([newInput])
                });
    }

    removeInput (input,e)
    {
        e.preventDefault();
        var i = "question-"+input;
        delete this.state.valQuestions[i];
        this.setState(({ inputs: this.state.inputs.filter(e => e!== input)}));
    }







    addInputR (e)
    {

        e.preventDefault();

        var newInput = this.state.responses[this.state.responses.length-1]  + 1;
        if(isNaN(newInput))
            newInput = 0;
        this.setState( ({ responses: this.state.responses.concat([newInput])
        }));
    }

    removeInputR (input,e)
    {
        e.preventDefault();
        var i = "answer-"+input;
        delete this.state.valAnswers[i];
        this.setState(({ responses: this.state.responses.filter(e => e!== input)}));
    }



    render() {
    const question  = this.props.question;
        return (

            <div className="modal fade show" id="edit-my-poll-popup" tabIndex="-1" role="dialog"
                 aria-labelledby="edit-my-poll-popup" >
                <div className="modal-dialog window-popup edit-my-poll-popup" role="document">
                    <div className="modal-content">
                        <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
                            <svg className="olymp-close-icon">
                                <use xlinkHref="#olymp-close-icon"/>
                            </svg>
                        </a>
                        <div className="modal-body">
                            <div className="control-block-button post-control-button">


                            </div>

                            <div className="edit-my-poll-head bg-primary">
                                <div className="head-content">
                                    <h2 className="title">Create Intent</h2>
                                    <div className="place inline-items">
                                        <span>Here you can train your Bot</span>
                                    </div>
                                </div>

                                <img className="poll-img" src="img/poll.png" alt="screen"></img>
                            </div>

                            <div className="edit-my-poll-content">
                                <h3>The Question</h3>
                                {question == null ?
                                    (<p>vide</p>) :
                                    (<React.Fragment><p>Content : {question.content}</p> <p> Created At : {question.content}</p></React.Fragment>)

                                }


                                <h3>Tips</h3>
                                <ul className="list--styled small-icon">
                                    <li>
                                        <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true"
                                             data-prefix="fa" data-icon="check" role="img"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                             data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                        </svg>
                                        You need to train your bot so he can answer the question next time
                                    </li>
                                    <li>
                                        <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true"
                                             data-prefix="fa" data-icon="check" role="img"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                             data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                        </svg>

                                        Try to add more Training phrases for more accuracy

                                    </li>
                                    <li>
                                        <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true"
                                             data-prefix="fa" data-icon="check" role="img"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                             data-fa-i2svg="">
                                            <path fill="currentColor"
                                                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                        </svg>

                                        Try to add more answer so he can be interactive
                                    </li>
                                </ul>










                                <form className="resume-form" onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                    <h3>Submit Training</h3>
                                        <input onChange={this.handleIntent.bind(this)}  type="text" className="form-control" name="intentName" placeholder="Intent Name"/>
                                        <h3>Training Phase</h3>
                                        <div className="col-md-1">
                                            <button type="button" className="btn btn-light"  onClick={this.addInput}>Add user expression</button>
                                        </div>

                                        <div id="dynamicInputQuestion">
                                            {this.state.inputs.map(input =>
                                                    <div className="row" key={input}>
                                                <div className="input-group mb-3" >

                                                    <input   type="text" className="form-control" name={'question-'+input} placeholder="User Expression" onChange={this.changeQuestionHandler.bind(this)}/>

                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-danger"
                                                                type="button" onClick={(e) =>this.removeInput(input,e)}>Remove
                                                        </button>
                                                    </div>
                                                </div>
                                                    </div>




                                               )}
                                        </div>







                                        <h3>Responses</h3>
                                        <div className="col-md-1">
                                            <button type="button" className="btn btn-light"  onClick={this.addInputR}>Add Another Response</button>
                                        </div>


                                        <div id="dynamicInputResponse">
                                            {this.state.responses.map(input =>
                                                <div className="row" key={input}>
                                                    <div className="input-group mb-3" >

                                                        <input   type="text" className="form-control" name={'answer-'+input} placeholder="Response"  onChange={this.changeAnswerHandler.bind(this)}/>

                                                        <div className="input-group-append">
                                                            <button className="btn btn-outline-danger"
                                                                    type="button" onClick={(e) =>this.removeInputR(input,e)}>Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>




                                            )}
                                        </div>





                                        <br/>
                                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">

                                            <input type="submit" className="btn btn-primary btn-lg full-width"  value="Submit New Intent"/>
                                        </div>
                                    </div>
                                </form>













                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }




}


