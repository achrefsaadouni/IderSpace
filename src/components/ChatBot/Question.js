import React, { Component } from "react";
import Moment from "react-moment";
import {deleteQuestion} from "../../store/actions/chatBotActions";

const Swal = require('sweetalert2')


export default class Question extends Component {


constructor()
{
    super();
}


    // eslint-disable-next-line no-undef
    delete= (question)=>  e =>{
        e.preventDefault();


        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Data !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                deleteQuestion(question);
                Swal.fire({
                    type: 'success',
                    title: 'The Question has been deleted',
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {

                    window.parent.location = window.parent.location.href;
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



    render() {
        const question = this.props.question;
        return (<li>
            <span className="date"> <Moment format="dddd MM, YYYY \at HH:mm">{question.createdAt }</Moment></span>
            <span className="position bold">{question.content.substring(0,50)}</span>
            <span><a href=""  onClick={this.delete(question)} ><img src="img/delete.png"></img></a></span>
            <span><a href="" data-toggle="modal" data-target="#edit-my-poll-popup"><img src="img/answer.png"></img></a></span>
        </li>);
    }




}


