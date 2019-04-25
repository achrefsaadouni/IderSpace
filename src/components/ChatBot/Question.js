import React, { Component } from "react";
import Moment from "react-moment";




export default class Question extends Component {




    // eslint-disable-next-line no-undef
    delete= (question)=>  e =>{
        e.preventDefault();
        this.props.ondelete(question)

    };

    modal = (question)=>  e =>{

        e.preventDefault();
        this.props.onModal(question)

    }

    render() {
        const question = this.props.question;
        return (<li>
            <span className="date"> <Moment format="dddd MM, YYYY \at HH:mm">{question.createdAt }</Moment></span>
            <span className="position bold">{question.content.substring(0,50)}</span>
            <span><a href=""  onClick={this.delete(question)} ><img src="img/delete.png"></img></a></span>
            <span><a href="" onClick={this.modal(question)} data-toggle="modal" data-target="#edit-my-poll-popup"><img src="img/answer.png"></img></a></span>
        </li>);
    }




}


