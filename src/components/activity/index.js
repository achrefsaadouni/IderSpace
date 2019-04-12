import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getActivities } from "../../store/actions/activityActions";
import Spinner from "../common/Spinner";
class index extends Component {
    componentDidMount() {
        this.props.getActivities();
    }
    render(){
        const { activity, loading } = this.props.activity;
        if (activity === null || loading) {
            return <Spinner />;
        }
        return (
            ""
        );
    }
}