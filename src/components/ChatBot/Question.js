import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserInfo } from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import Moment from "react-moment";
export default class Question extends Component {

    render() {
        const question = this.props.question;
        return (<li>
            <span className="date"> <Moment format="dddd MM, YYYY \at HH:mm">{question.createdAt }</Moment></span>
            <span className="position bold">{question.content.substring(0,50)}</span>
            <span><a href=""  ><img src="img/delete.png"></img></a></span>
            <span><a href="" data-toggle="modal" data-target="#edit-my-poll-popup"><img src="img/answer.png"></img></a></span>
        </li>);
    }
}


