import React, { Component } from "react";
import {connect} from "react-redux";
import {deleteQuestion, getQuestions} from "../../store/actions/chatBotActions"
import Spinner from "../common/Spinner";
import Question from "./Question"
import Modal from "./modal";
const Swal = require('sweetalert2');
class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions : this.props.questionBots.questionBots,
            etat : false,
            question : null
        };
    }

    componentDidMount() {
        this.props.getQuestions()


    }
    onDeleteParent = e => {
        if (!this.state.etat)
        {
            this.setState ({
                questions : this.props.questionBots.questionBots,
                etat : true,
            });
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Data !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                deleteQuestion(e);
                Swal.fire({
                    type: 'success',
                    title: 'The Question has been deleted',
                    showConfirmButton: false,
                    timer: 1000,
                }).then(() => {
                    var newQuestion = this.state.questions.filter(
                        e1 => e1._id!=e._id)
                    this.setState ({
                        questions : newQuestion,
                        etat : true
                    })
                })



            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your Data  is safe :)',
                    'error'
                )
            }
        })

    };


    OnModalParent = e =>
    {
        this.setState(
            {
                question : e
            }
        )
    }

    render() {

                const {loading,questionBots} =this.props.questionBots;

                    if(loading  || questionBots === null){
                        return <Spinner/>
                    }
        var item = null;
        if (!this.state.etat) {
             this.item = questionBots.map(e =>
                <Question ondelete={this.onDeleteParent.bind(this)} key={e._id} question={e} onModal = {this.OnModalParent.bind(this)}/>
            );

        }else{
             this.item = this.state.questions.map(e =>
                <Question ondelete={this.onDeleteParent.bind(this)} key={e._id} question={e} onModal = {this.OnModalParent.bind(this)}/>
            );
        }

        return (
                    <React.Fragment>
                        <section className="medium-padding100">
                            <div className="container">
                                <div className="row mb60">
                                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12  m-auto">
                                        <div className="crumina-module crumina-heading align-center">
                                            <div className="heading-sup-title">IderSpace</div>
                                            <h2 className="heading-title">Chat Bot Training</h2>
                                            <p className="heading-text">Here you can answer Users Unanswered question for the bot
                                            </p>
                                            <p className="heading-text">The more you answer questions the more IderBot gives Precise answers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-xl-10 col-lg-10 col-md-12 col-sm-12  m-auto">


                                        <ul className="table-careers">
                                            <li className="head">
                                                <span>DATE POSTED</span>
                                                <span>CONTENT</span>
                                                <span>Delete</span>
                                                <span>Answer</span>
                                            </li>





                                            { this.item }


                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <Modal question = {this.state.question} />
                    </React.Fragment>
                );


        }


}
const mapStateToProps = state => ({
    questionBots : state.questionBots
});
export default connect( mapStateToProps, {getQuestions}) (index);