import React, {Component} from 'react';
import axios from "axios";
import Spinner from "../common/Spinner";
import ResearchUser from "./researchUser";
import InvitationHeader from "./invitationHeader";

class ResearchUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            etat: false
        }

        axios({
            method: 'get',
            url: 'http://localhost:2500/api/user/searchUsers/'+this.props.match.params.name

        }).then((res) => {
            console.log(res.data.re);
            this.setState({
                users: res.data.re,
                etat:true
            })
        })
    }




    render() {
        if (this.state.etat === false){
            return <Spinner/>
        }
        let researchInterface;
        researchInterface = this.state.users.map(user => (
            <ResearchUser key={user._id} user={user} />
        ))

        console.log(this.props.match.params.name);
        console.log(this.state.users);
        return (
            <React.Fragment>
                <div className="header-spacer header-spacer-small"/>
                <div className="main-header">
                    <div className="content-bg-wrap bg-group"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                                <div className="main-header-content">
                                    <h1>Manage your Friend Groups</h1>
                                    <p>Welcome to your friends groups! Do you wanna know what your close friends have
                                        been up to? Groups
                                        will let you easily manage your friends and put the into categories so when you
                                        enter you’ll only
                                        see a newsfeed of those friends that you placed inside the group. Just click on
                                        the plus button below and start now!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="img-bottom" src={process.env.PUBLIC_URL + "img/group-bottom.png"} alt="friends"/>
                </div>
                <div className="container">
                    <div className="row">

                        {researchInterface}



                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default ResearchUsers;
