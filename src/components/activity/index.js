import React, {Component} from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {getActivities} from "../../store/actions/activityActions";
import Spinner from "../common/Spinner";

class index extends Component {
    componentDidMount() {
        this.props.getActivities();
    }

    render() {
        const {activities, loading} = this.props.activity;
        if (activities === null || loading) {
            return <Spinner/>;
        }
        console.log(activities)
        return (
            <React.Fragment>
                <div className="main-header">
                    <div className="content-bg-wrap bg-account"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                                <div className="main-header-content">
                                    <h1>Olympus Blog</h1>
                                    <p>Welcome to our blog! Here you’ll find news about the latest features of our
                                        network, plugins,
                                        interviews with our developers and lots of other cool things! We also feature
                                        the best profiles and fan pages,
                                        so keep an eye out or let us know if you wanna appear here or if you wanna
                                        nominate someone.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img className="img-bottom" src="img/blog_bottom.png" alt="friends"/>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="ui-block responsive-flex1200">
                                <div className="ui-block-title">
                                    <ul className="filter-icons">
                                        <li>
                                            <a href="#">
                                                <img src="img/icon-chat2.png" alt="icon"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/icon-chat15.png" alt="icon"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/icon-chat9.png" alt="icon"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/icon-chat4.png" alt="icon"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/icon-chat6.png" alt="icon"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/icon-chat26.png" alt="icon"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/icon-chat27.png" alt="icon"/>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="w-select">
                                        <div className="title">Filter By:</div>
                                        <fieldset className="form-group">
                                            <div className="btn-group bootstrap-select form-control">
                                                <button type="button" className="btn dropdown-toggle btn-secondary"
                                                        data-toggle="dropdown" role="button" title="All Categories">
                                                    <span
                                                        className="filter-option pull-left">All Categories</span>&nbsp;
                                                    <span className="bs-caret"><span className="caret"></span></span>
                                                </button>
                                                <div className="dropdown-menu open" role="combobox">
                                                    <ul className="dropdown-menu inner" role="listbox"
                                                        aria-expanded="false">
                                                        <li data-original-index="0" className="selected"><a tabIndex="0"
                                                                                                            className=" dropdown-item"

                                                                                                            data-tokens="null"
                                                                                                            role="option"
                                                                                                            aria-disabled="false"
                                                                                                            aria-selected="true"><span
                                                            className="text">All Categories</span><span
                                                            className="glyphicon glyphicon-ok check-mark"></span></a>
                                                        </li>
                                                        <li data-original-index="1"><a tabIndex="0"
                                                                                       className=" dropdown-item"
                                                                                       data-tokens="null"
                                                                                       role="option"
                                                                                       aria-disabled="false"
                                                                                       aria-selected="false"><span
                                                            className="text">Favourite</span><span
                                                            className="glyphicon glyphicon-ok check-mark"></span></a>
                                                        </li>
                                                        <li data-original-index="2"><a tabIndex="0"
                                                                                       className=" dropdown-item"
                                                                                        data-tokens="null"
                                                                                       role="option"
                                                                                       aria-disabled="false"
                                                                                       aria-selected="false"><span
                                                            className="text">Likes</span><span
                                                            className="glyphicon glyphicon-ok check-mark"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <select className="selectpicker form-control" tabIndex="-98">
                                                    <option value="NU">All Categories</option>
                                                    <option value="NU">Favourite</option>
                                                    <option value="NU">Likes</option>
                                                </select></div>
                                            <span className="material-input"></span></fieldset>
                                    </div>

                                    <div className="w-select">
                                        <fieldset className="form-group">
                                            <div className="btn-group bootstrap-select form-control">
                                                <button type="button" className="btn dropdown-toggle btn-secondary"
                                                        data-toggle="dropdown" role="button" title="Date (Descending)">
                                                    <span
                                                        className="filter-option pull-left">Date (Descending)</span>&nbsp;
                                                    <span className="bs-caret"><span className="caret"></span></span>
                                                </button>
                                                <div className="dropdown-menu open" role="combobox">
                                                    <ul className="dropdown-menu inner" role="listbox"
                                                        aria-expanded="false">
                                                        <li data-original-index="0" className="selected"><a tabIndex="0"
                                                                                                            className=" dropdown-item"

                                                                                                            data-tokens="null"
                                                                                                            role="option"
                                                                                                            aria-disabled="false"
                                                                                                            aria-selected="true"><span
                                                            className="text">Date (Descending)</span><span
                                                            className="glyphicon glyphicon-ok check-mark"></span></a>
                                                        </li>
                                                        <li data-original-index="1"><a tabIndex="0"
                                                                                       className=" dropdown-item"
                                                                                        data-tokens="null"
                                                                                       role="option"
                                                                                       aria-disabled="false"
                                                                                       aria-selected="false"><span
                                                            className="text">Date (Ascending)</span><span
                                                            className="glyphicon glyphicon-ok check-mark"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <select className="selectpicker form-control" tabIndex="-98">
                                                    <option value="NU">Date (Descending)</option>
                                                    <option value="NU">Date (Ascending)</option>
                                                </select></div>
                                            <span className="material-input"></span></fieldset>
                                    </div>

                                    <a href="#" data-toggle="modal" data-target="#create-photo-album"
                                       className="btn btn-primary btn-md-2">Filter</a>

                                    <form className="w-search">
                                        <div className="form-group with-button is-empty">
                                            <input className="form-control" type="text"
                                                   placeholder="Search Blog Posts......"/>
                                            <button>
                                                <svg className="olymp-magnifying-glass-icon">
                                                    <use xlinkHref="#olymp-magnifying-glass-icon"></use>
                                                </svg>
                                            </button>
                                            <span className="material-input"></span></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">

                        <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="ui-block">


                                <article className="hentry blog-post blog-post-v3">

                                    <div className="post-thumb">
                                        <img src="img/post1.jpg" alt="photo"/>
                                        <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                                    </div>

                                    <div className="post-content">

                                        <div className="author-date">
                                            by
                                            <a className="h6 post__author-name fn" href="#">Maddy Simmons</a>
                                            <div className="post__date">
                                                <time className="published" dateTime="2017-03-24T18:18">
                                                    - 7 hours ago
                                                </time>
                                            </div>
                                        </div>

                                        <a href="#" className="h3 post-title">Here’s the Featured Urban photo of
                                            August! </a>
                                        <p>Here’s a photo from last month’s photoshoot. We had a lot of fun doing it and
                                            got really
                                            awesome shots for the new summer catalog.
                                        </p>

                                        <div className="post-additional-info inline-items">

                                            <ul className="friends-harmonic">
                                                <li>
                                                    <a href="#">
                                                        <img src="img/icon-chat27.png" alt="icon"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="img/icon-chat2.png" alt="icon"/>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="names-people-likes">
                                                26
                                            </div>

                                            <div className="comments-shared">
                                                <a href="#" className="post-add-icon inline-items">
                                                    <svg className="olymp-speech-balloon-icon">
                                                        <use xlinkHref="#olymp-speech-balloon-icon"></use>
                                                    </svg>
                                                    <span>0</span>
                                                </a>
                                            </div>

                                        </div>
                                    </div>

                                </article>


                            </div>





                        </div>

                        <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <aside>

                                <div className="ui-block">
                                    <div className="ui-block-title">
                                        <h6 className="title">Featured Posts</h6>
                                    </div>
                                </div>

                                <div className="ui-block">


                                    <article className="hentry blog-post blog-post-v3 featured-post-item">

                                        <div className="post-thumb">
                                            <img src="img/post13.jpg" alt="photo"/>
                                            <a href="#" className="post-category bg-purple">INSPIRATION</a>
                                        </div>

                                        <div className="post-content">

                                            <div className="author-date">
                                                by
                                                <a className="h6 post__author-name fn" href="#">JACK SCORPIO</a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        - 5 MONTHS ago
                                                    </time>
                                                </div>
                                            </div>

                                            <a href="#" className="h4 post-title">We went lookhunting in all the
                                                California bay area</a>

                                            <div className="post-additional-info inline-items">

                                                <ul className="friends-harmonic">
                                                    <li>
                                                        <a href="#">
                                                            <img src="img/icon-chat26.png" alt="icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src="img/icon-chat27.png" alt="icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src="img/icon-chat2.png" alt="icon"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="names-people-likes">
                                                    206
                                                </div>

                                                <div className="comments-shared">
                                                    <a href="#" className="post-add-icon inline-items">
                                                        <svg className="olymp-speech-balloon-icon">
                                                            <use xlinkHref="#olymp-speech-balloon-icon"></use>
                                                        </svg>
                                                        <span>97</span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                    </article>


                                </div>

                                <div className="ui-block">


                                    <article className="hentry blog-post blog-post-v3 featured-post-item">

                                        <div className="post-thumb">
                                            <img src="img/post14.jpg" alt="photo"/>
                                            <a href="#" className="post-category bg-blue-light">THE COMMUNITY</a>
                                        </div>

                                        <div className="post-content">

                                            <div className="author-date">
                                                by
                                                <a className="h6 post__author-name fn" href="#">JACK SCORPIO</a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        - 2 MONTHS ago
                                                    </time>
                                                </div>
                                            </div>

                                            <a href="#" className="h4 post-title">We went lookhunting in all the
                                                California bay area</a>

                                            <div className="post-additional-info inline-items">

                                                <ul className="friends-harmonic">
                                                    <li>
                                                        <a href="#">
                                                            <img src="img/icon-chat6.png" alt="icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src="img/icon-chat7.png" alt="icon"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="names-people-likes">
                                                    37
                                                </div>

                                                <div className="comments-shared">
                                                    <a href="#" className="post-add-icon inline-items">
                                                        <svg className="olymp-speech-balloon-icon">
                                                            <use xlinkHref="#olymp-speech-balloon-icon"></use>
                                                        </svg>
                                                        <span>62</span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                    </article>


                                </div>

                                <div className="ui-block">


                                    <article className="hentry blog-post blog-post-v3 featured-post-item">

                                        <div className="post-thumb">
                                            <img src="img/post15.jpg" alt="photo"/>
                                            <a href="#" className="post-category bg-purple">INSPIRATION</a>
                                        </div>

                                        <div className="post-content">

                                            <div className="author-date">
                                                by
                                                <a className="h6 post__author-name fn" href="#">MADDY SIMMONS </a>
                                                <div className="post__date">
                                                    <time className="published" dateTime="2017-03-24T18:18">
                                                        - 3 MONTHS ago
                                                    </time>
                                                </div>
                                            </div>

                                            <a href="#" className="h4 post-title">Check out this 10 yummy breakfast
                                                recipes</a>

                                            <div className="post-additional-info inline-items">

                                                <ul className="friends-harmonic">
                                                    <li>
                                                        <a href="#">
                                                            <img src="img/icon-chat20.png" alt="icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src="img/icon-chat11.png" alt="icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src="img/icon-chat9.png" alt="icon"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="names-people-likes">
                                                    88
                                                </div>

                                                <div className="comments-shared">
                                                    <a href="#" className="post-add-icon inline-items">
                                                        <svg className="olymp-speech-balloon-icon">
                                                            <use xlinkHref="#olymp-speech-balloon-icon"></use>
                                                        </svg>
                                                        <span>39</span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                    </article>


                                </div>


                            </aside>
                        </div>

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
    activity: state.activity
});

export default connect(
    mapStateToProps,
    {getActivities}
)(index);
