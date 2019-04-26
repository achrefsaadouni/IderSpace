import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {getTodosForModule} from "../../../store/actions/activityActions";
import {BarLoader} from "react-spinners";
class ToDoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            moduleId: this.props.module._id,


        }
    }

    componentDidMount() {
        this.props.getTodosForModule(this.state.moduleId)
    }

    render() {
        const {moduleTodos, loading} = this.props.activity;
        const {fullActivity, module} = this.props
        if (loading) {
            return (<div>
                <BarLoader
                    widthUnit={"%"}
                    height={5}
                    width={100}
                    color={'#ff5e3a'}
                    loading={true}
                />
            </div>)
        }
            else{

            return ("")
        }

}
}
const mapStateToProps = state => ({
    activity: state.activity
});

export default connect(
    mapStateToProps,
    {getTodosForModule}
)(ToDoList);
