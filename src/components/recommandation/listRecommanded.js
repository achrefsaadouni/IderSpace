import React, {Component} from 'react';
import {getRecommandation} from "../../store/actions/recommandationAction";
import {connect} from "react-redux";
import Spinner from "../common/Spinner";
import {loginUser} from "../../store/actions/authActions";
import PropTypes from "prop-types";


class ListRecommanded extends Component {
    componentDidMount() {
       //this.props.getRecommandation();
    }
    constructor() {
        super()
        this.state = {
            tab: []
        }
    }


    render() {
        const   { loading, recommandation } = this.props.recommandation

        if (recommandation ===null || loading) {
            return <Spinner />;
        }

        console.log("....."+this.props.recommandation.recommandation.Recommended[0].email)
        return (
            <React.Fragment>
            </React.Fragment>
        );
    }
}

ListRecommanded.propTypes = {
    getRecommandation : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    recommandation: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    recommandation:state.recommandation

});

export default connect(
    mapStateToProps,
    { getRecommandation }
)(ListRecommanded);