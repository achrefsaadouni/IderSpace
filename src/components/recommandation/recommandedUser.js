import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class RecommandedUser extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="ui-block">
                    <div className="birthday-item inline-items">
                        <div className="author-thumb">
                            <img src="img/avatar7-sm.jpg" alt="author"/>
                        </div>
                        <div className="birthday-author-name">
                            <a href="#" className="h6 author-name">{user.firstname} {user.lastname}</a>
                            <div className="birthday-date">{user.email} </div>
                        </div>
                        <a href="20-CalendarAndEvents-MonthlyCalendar.html" className="btn btn-sm bg-blue">
                            invit</a>
                    </div>
                </div>
            </div>
        );
    }
}
