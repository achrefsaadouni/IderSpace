import React, {Component} from 'react';
import {deleteQuestion} from "../../store/actions/chatBotActions";

const Swal = require('sweetalert2');

class Requests extends Component {
    onClickCancel = id => {
        this.props.onManageActivity(false, id)

    };
    onClickAccept = id => {
        this.props.onManageActivity(true, id)

    };

    ondeleteParentAccept = e => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Data !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.onClickAccept(e);
                Swal.fire({
                    type: 'success',
                    title: 'The Question has been deleted',
                    showConfirmButton: false,
                    timer: 1000,
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

    ondeleteParentCancel = e => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this Data !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.onClickCancel(e);
                Swal.fire({
                    type: 'success',
                    title: 'The Activity has been Cancelled',
                    showConfirmButton: false,
                    timer: 1000,
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
        const request = this.props.request;
        console.log(request)
        if (request.stat === 'waiting') {
            return (

                <li>
                    <div className="author-thumb">
                        <img src="icons/add.png" style={{width: '41.99px', height: '41.99px'}} alt="author"/>
                    </div>
                    <div className="notification-event">
                        <center><a className="h6 notification-friend">New Activity</a></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item">{request.type}</span>
                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend"/></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item"/>
                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend"/></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item"/>
                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend"/></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item"/>
                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend"/></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item"/>
                    </div>
                    <div className="notification-event">
                        <center><a className="h6 notification-friend">Title</a></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item">{request.titleActivity}</span>

                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend"/></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item"/>
                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend"/></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item"/>
                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend"/></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item"/>
                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend"/></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item"/>
                    </div>
                    <div className="notification-event">

                        <center><a className="h6 notification-friend">Description</a></center>
                        <span style={{fontSize: '14px'}} className="chat-message-item">{request.description}</span>
                    </div>
                    <span className="notification-icon">

											<a onClick={this.ondeleteParentAccept.bind(this, request.idActivity)}
                                               className="accept-request">
												<span className="icon-add">
													<svg className="olymp-happy-face-icon"/>
												</span>
												Accept
											</a>

											<a onClick={this.ondeleteParentCancel.bind(this, request.idActivity)}
                                               className="accept-request request-del">
												<span className="icon-minus">
													<svg className="olymp-happy-face-icon"><use
                                                        xlinkHref="#olymp-happy-face-icon"/></svg>
												</span>
                                                Cancel
											</a>

										</span>

                    <div className="more">
                        <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon"/>
                        </svg>
                        <svg className="olymp-little-delete">
                            <use xlinkHref="#olymp-little-delete"/>
                        </svg>
                    </div>
                </li>

            );
        } else {
            return (
                <div/>
            )
        }
    }
}

export default Requests;
