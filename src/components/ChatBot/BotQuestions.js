import React, { Component } from "react";
import {connect} from "react-redux";
import {getQuestions} from "../../store/actions/chatBotActions"
import Spinner from "../common/Spinner";
import Question from "./Question"

class index extends Component {
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this)
    }
    handler() {
       this.render();
    }
    componentDidMount() {
        this.props.getQuestions()
    }

    render() {

                const {loading,questionBots} =this.props.questionBots

                    if(loading){
                        return <Spinner/>
                    }
        const item = questionBots.map(e =>
            <Question key = {e._id} question =  {e} handler = {this.handler} />
        );

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





                                            { item }


                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </section>
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
                                                <h2 className="title">Senior Developer</h2>
                                                <div className="place inline-items">
                                                    <span>SAN FRANCISCO, CA</span>
                                                    <span>FULL TIME</span>
                                                </div>
                                            </div>

                                            <img className="poll-img" src="img/poll.png" alt="screen"></img>
                                        </div>

                                        <div className="edit-my-poll-content">
                                            <h3>Job Description</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip
                                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt
                                                mollit anim id est laborum.
                                            </p>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                doloremque laudantium, totam
                                                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                                beatae vitae dicta sunt
                                                explicabo.
                                            </p>

                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident:</p>


                                            <h3>Benefits</h3>
                                            <ul className="list--styled small-icon">
                                                <li>
                                                    <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true"
                                                         data-prefix="fa" data-icon="check" role="img"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                         data-fa-i2svg="">
                                                        <path fill="currentColor"
                                                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                    </svg>
                                                    Competitive basic salary.
                                                </li>
                                                <li>
                                                    <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true"
                                                         data-prefix="fa" data-icon="check" role="img"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                         data-fa-i2svg="">
                                                        <path fill="currentColor"
                                                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                    </svg>

                                                    Generous dental and health plans.
                                                </li>
                                                <li>
                                                    <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true"
                                                         data-prefix="fa" data-icon="check" role="img"
                                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                         data-fa-i2svg="">
                                                        <path fill="currentColor"
                                                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                    </svg>

                                                    Accruing vacation and sick days.
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
                    </React.Fragment>
                );


        }


}
const mapStateToProps = state => ({
    questionBots : state.questionBots
});
export default connect( mapStateToProps, {getQuestions}) (index);