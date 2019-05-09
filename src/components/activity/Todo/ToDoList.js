import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {getTodosForModule} from "../../../store/actions/activityActions";
import {BarLoader} from "react-spinners";
import ReactMinimalPieChart from 'react-minimal-pie-chart';
class ToDoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            moduleId: this.props.module._id,
            data:[
                {
                    title: 'TODO',
                    value: 10,
                    color: '#3179ba'
                },
                {
                    title: 'DOING',
                    value: 15,
                    color: '#FF6347'
                },
                {
                    title: 'DONE',
                    value: 20,
                    color: '#4BB543'
                }
            ]


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
            if(moduleTodos.allTodo!=null){
                this.state.data[0].value=moduleTodos.todo.length
                this.state.data[1].value=moduleTodos.intest.length
                this.state.data[2].value=moduleTodos.completed.length
            return (<ReactMinimalPieChart
                data={this.state.data}
                style={{height: '400px',width:'100%'}}
                lineWidth={20}
                paddingAngle={18}
                rounded
                label
                labelStyle={{
                    fontSize: '10px',
                    fontFamily: 'sans-serif'
                }}
                labelPosition={60}
            />)
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
