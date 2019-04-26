import React, {Component} from 'react';
import Requests from './requests';

class Activities extends Component {
    manageActivity = (etat , id) => {
        console.log(etat);
        console.log(id);
        this.props.onActionOnActivity(etat , id);
    };
    render() {
        let listRequest;
        if (this.props.etat === false){
        listRequest = this.props.profile.activityRequest.map(request =>
            <Requests onManageActivity={this.manageActivity.bind(this)} key={request._id} request={request}/>
        );}else{
            listRequest = this.props.profile.map(request =>
                <Requests onManageActivity={this.manageActivity.bind(this)} key={request._id} request={request}/>
            );
        }
        return (

            <div className="container">
                <div className="row">
                    <div className="col col-xl-12 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Activities Requests</h6>
                                <a href="#" className="more">
                                    <svg className="olymp-three-dots-icon">
                                        <use xlinkHref="#olymp-three-dots-icon"/>
                                    </svg>
                                </a>
                            </div>


                            <ul className="notification-list friend-requests">

                                {listRequest}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Activities;
