import React, { Component } from "react";
import Moment from "react-moment";




export default class Modal extends Component {


    constructor()
    {
        super();
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
                                    <h2 className="title">Training Phase</h2>
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

                                <form className="resume-form">
                                    <h3>Submit Application</h3>
                                    <div className="row">


                                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">

                                            <a href="#" className="btn btn-primary btn-lg full-width">Submit
                                                Application</a>
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


