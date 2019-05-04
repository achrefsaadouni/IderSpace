import React, {Component} from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {getActivities,getAllForStudent} from "../../store/actions/activityActions";
import Spinner from "../common/Spinner";
import Moment from "react-moment";
import {Link} from "react-router-dom"


class index extends Component {
    goToWorkPlace = e => {
        let path = `/activity/workplace/` + e.target.value;
        this.props.history.push(path);
    }
    changeRouteToCreate() {
        this.props.history.push("/activity/create")
    }

    constructor() {
        super();
        this.goToWorkPlace = this.goToWorkPlace.bind(this);
        this.routeChange=this.routeChange.bind(this)

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    routeChange() {
        let path = `/activity/create`;
        this.props.history.push(path);
    }

    componentDidMount() {
        if(this.props.auth.user.role=="teacher")
        this.props.getActivities();
        else
            this.props.getAllForStudent();

    }

    render() {
        this.state = {
            academics: [],
            pros: [],
            entertains: [],
            volu: [],
            challenges: [],
        }
        let listItems
        const {activities, loading,pactivity} = this.props.activity;
        if (loading) {
            return <Spinner/>;
        }
        else if(activities.resultat!=null){

         listItems = activities.resultat.map((e) =>

            <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12" key={e._id}>

                <div className="ui-block">
                    {/* Post */}
                    <article className="hentry post has-post-thumbnail thumb-full-width">
                        <div className="post__author author vcard inline-items">
                            <img src="img/author-page.jpg" alt="author"/>
                            <div className="author-date">
                                <a className="h6 post__author-name fn" href="02-ProfilePage.html">You </a> Created an <a
                                href="#"><b>{e.type}</b> activity</a>
                                <div className="post__date">
                                    <time className="published" dateTime="2017-03-24T18:18">
                                        <Moment format="dddd MM, YYYY \at HH:mm">{e.createdAt}</Moment>
                                    </time>
                                </div>
                            </div>
                            <div className="more">
                                <svg className="olymp-three-dots-icon">
                                    <use xlinkHref="#olymp-three-dots-icon"/>
                                </svg>
                                <ul className="more-dropdown">
                                    <li>
                                        <a href="#">Edit Post</a>
                                    </li>
                                    <li>
                                        <a href="#">Delete Post</a>
                                    </li>
                                    <li>
                                        <a href="#">Turn Off Notifications</a>
                                    </li>
                                    <li>
                                        <a href="#">Select as Featured</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="post-thumb">
                            <img src="img/post__thumb5.jpg" alt="photo"/>
                        </div>
                        <a href="#" data-toggle="modal" data-target="#blog-post-popup"
                           className="h2 post-title">{e.title}</a>
                        <p>this activity is a <b>{e.type}</b>.
                        </p>
                        <p>
                            {e.description}.
                        </p>
                        <p>
                            To Manage you activities Go to its <b>Workspace</b> by clicking on Workplace...
                        </p>
                        <Link to={"activity/workspace/"+e._id} className="btn btn-md-2 btn-border-think c-orange btn-transparent custom-color"
                                >Read More
                        </Link>
                        <div className="post-additional-info inline-items">

                            <ul className="friends-harmonic">
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic5.jpg" alt="friend"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic10.jpg" alt="friend"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic7.jpg" alt="friend"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic8.jpg" alt="friend"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic2.jpg" alt="friend"/>
                                    </a>
                                </li>
                            </ul>
                            <div className="names-people-likes">
                                {e.members.length} are in this activity
                            </div>
                        </div>
                        <div className="control-block-button post-control-button">
                            <a href="#" className="btn btn-control">
                                <svg className="olymp-like-post-icon">
                                    <use xlinkHref="#olymp-like-post-icon"/>
                                </svg>
                            </a>
                            <a href="#" className="btn btn-control">
                                <svg className="olymp-comments-post-icon">
                                    <use xlinkHref="#olymp-comments-post-icon"/>
                                </svg>
                            </a>
                            <a href="#" className="btn btn-control">
                                <svg className="olymp-share-icon">
                                    <use xlinkHref="#olymp-share-icon"/>
                                </svg>
                            </a>
                        </div>
                    </article>
                    {/* ... end Post */}            </div>
            </div>
        )
        }
        else if(pactivity.result!=null){
             listItems = pactivity.result.map((e) =>

                <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12" key={e._id}>

                    <div className="ui-block">
                        {/* Post */}
                        <article className="hentry post has-post-thumbnail thumb-full-width">
                            <div className="post__author author vcard inline-items">
                                <img src="img/author-page.jpg" alt="author"/>
                                <div className="author-date">
                                    <a className="h6 post__author-name fn" href="02-ProfilePage.html">You </a> Created an <a
                                    href="#"><b>{e.type}</b> activity</a>
                                    <div className="post__date">
                                        <time className="published" dateTime="2017-03-24T18:18">
                                            <Moment format="dddd MM, YYYY \at HH:mm">{e.createdAt}</Moment>
                                        </time>
                                    </div>
                                </div>
                                <div className="more">
                                    <svg className="olymp-three-dots-icon">
                                        <use xlinkHref="#olymp-three-dots-icon"/>
                                    </svg>
                                    <ul className="more-dropdown">
                                        <li>
                                            <a href="#">Edit Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Delete Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Turn Off Notifications</a>
                                        </li>
                                        <li>
                                            <a href="#">Select as Featured</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post-thumb">
                                <img src="img/post__thumb5.jpg" alt="photo"/>
                            </div>
                            <a href="#" data-toggle="modal" data-target="#blog-post-popup"
                               className="h2 post-title">{e.title}</a>
                            <p>this activity is a <b>{e.type}</b>.
                            </p>
                            <p>
                                {e.description}.
                            </p>
                            <p>
                                To Manage you activities Go to its <b>Workspace</b> by clicking on Workplace...
                            </p>
                            <Link to={"activity/workspace/"+e._id} className="btn btn-md-2 btn-border-think c-orange btn-transparent custom-color"
                            >Read More
                            </Link>
                            <div className="post-additional-info inline-items">

                                <ul className="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic5.jpg" alt="friend"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic10.jpg" alt="friend"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic7.jpg" alt="friend"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic8.jpg" alt="friend"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic2.jpg" alt="friend"/>
                                        </a>
                                    </li>
                                </ul>
                                <div className="names-people-likes">
                                    {e.members.length} are in this activity
                                </div>
                            </div>
                            <div className="control-block-button post-control-button">
                                <a href="#" className="btn btn-control">
                                    <svg className="olymp-like-post-icon">
                                        <use xlinkHref="#olymp-like-post-icon"/>
                                    </svg>
                                </a>
                                <a href="#" className="btn btn-control">
                                    <svg className="olymp-comments-post-icon">
                                        <use xlinkHref="#olymp-comments-post-icon"/>
                                    </svg>
                                </a>
                                <a href="#" className="btn btn-control">
                                    <svg className="olymp-share-icon">
                                        <use xlinkHref="#olymp-share-icon"/>
                                    </svg>
                                </a>
                            </div>
                        </article>
                        {/* ... end Post */}            </div>
                </div>
            )
        }
        else window.location.reload()
        return (
            <React.Fragment>
                <div className="main-header">
                    <div className="content-bg-wrap bg-account"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                                <div className="main-header-content">
                                    <h1>IderSpace Activity</h1>
                                    <p>Welcome to your Space! Here you’ll find news about the latest features of your
                                        network,activities,
                                        connect to your activity's members smoothly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="img-bottom" src="img/blog_bottom.png" alt="friends"/>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block responsive-flex">
                                <div className="ui-block-title">
                                    <div className="h6 title">Your Activities ()</div>
                                    {this.props.auth.user.role=="teacher"&&
                                    <button className="btn btn-secondary" onClick={this.routeChange}>
                                        New activity ?
                                    </button>}
                                    <form className="w-search">
                                        <div className="form-group with-button is-empty">
                                            <input className="form-control" type="text"
                                                   placeholder="Search Activities..."/>
                                            <button>
                                                <svg className="olymp-magnifying-glass-icon">
                                                    <use xlinkHref="#olymp-magnifying-glass-icon"></use>
                                                </svg>
                                            </button>
                                            <span className="material-input"/></div>
                                    </form>
                                    <a href="#" className="more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">


                        {listItems}


                    </div>

                </div>


                <a className="back-to-top" href="#">
                    <img src="svg-icons/back-to-top.svg" alt="arrow" className="back-icon"/>
                </a>


            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    activity: state.activity
});

export default connect(
    mapStateToProps,
    {getActivities,getAllForStudent}
)(index);
