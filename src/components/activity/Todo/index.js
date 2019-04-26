import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {CreateTodo, getActivityById, getTodosForModule} from "../../../store/actions/activityActions";
import {BarLoader} from "react-spinners";
import Board from 'react-trello'
import swal from "sweetalert";
import axios from "axios";


class NewCard extends React.Component {


    updateField = (field, evt) => {
        /*    [
                {title: 'High', color: 'white', bgcolor: '#EB5A46'},
                {title: 'Tech Debt', color: 'white', bgcolor: '#0079BF'},
                {title: 'Very long tag that is', color: 'white', bgcolor: '#61BD4F'},
                {title: 'One more', color: 'white', bgcolor: '#61BD4F'}
            ]*/
        if (field == "tags") {
            console.log("tag:", evt.target.value)
            if (evt.target.value == "Hard") {
                this.setState({[field]: [{title: 'High', color: 'white', bgcolor: 'red'}]})
            }
            else if (evt.target.value == "Very") {
                this.setState({[field]: [{title: 'Tech Debt', color: 'white', bgcolor: '#0079BF'}]})
            }
            else if (evt.target.value == "High") {
                this.setState({[field]: [{title: 'Very long tag that is', color: 'white', bgcolor: '#61BD4F'}]})
            }
            else {
                this.setState({[field]: [{title: 'One more', color: 'white', bgcolor: '#61BD4F'}]})
            }
        }
        else
            this.setState({[field]: evt.target.value})
    }

    handleAdd = () => {
        if (this.state) {
            const {title, description, label, tags} = this.state

            if (title == null || description == null || label == null || tags == null) {
                swal("Oops!", "Please fill all the fields in Form to proceed!", "error");

            }
            else {
                this.props.onAdd(this.state)
                console.clear()
                console.log(this.props)
              //  this.state.CreateTodo(title, description, tags, label, this.state.moduleId)
               axios
                    .post(
                        `http://localhost:2500/api/activity/addTodo`
                        ,{title: title,description:description,tags:tags,label:label,moduleId:this.props.moduleId}
                    )
                    .then(res => {

                        swal("Nice!", "ToDo was created successfully !", "success");
                        console.log(res.data)
                    })
                    .catch(err =>
                        ({
                          err:err
                        })
                    );


             //console.log(this.props.moduleId)
            }
        }
        else {
            swal("Oops!", "Please fill all the fields in Form to proceed!", "error");
        }


    }

    render() {
        const {onCancel} = this.props
        return (
            <div style={{
                background: 'white',
                borderRadius: 3,
                border: '1px solid #eee',
                borderBottom: '1px solid #ccc'
            }}>
                <div style={{padding: 5, margin: 5}}>
                    <div>
                        <div style={{marginBottom: 5}}>
                            <input type="text" onChange={evt => this.updateField('title', evt)} placeholder="Title"
                                   required={true}/>
                        </div>
                        <div style={{marginBottom: 5}}>
                            <input type="textarea" onChange={evt => this.updateField('description', evt)}
                                   placeholder="Description" required={true}/>
                        </div>
                        <div style={{marginBottom: 5}}>
                            <input type="date" min="2019-04-26" onChange={evt => this.updateField('label', evt)}
                                   placeholder="End Date" required={true}/>
                        </div>
                        <div style={{marginBottom: 5}}>

                            <select defaultValue={"One"} onChange={evt => this.updateField('tags', evt)}>
                                <option value="Hard">Hard</option>
                                <option value="High">High skill</option>
                                <option value="Very">Very long</option>
                                <option value="One" selected={true}>One more</option>
                            </select>
                        </div>

                    </div>
                    <button className="btn-secondary" onClick={this.handleAdd}>Add</button>
                    <button className="btn-secondary" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

class todoBoard extends Component {
    onDataChange = e => {
        console.log("loading data")
    }
    onCardDelete = (cardId, laneId) => {
        console.log(`Card: ${cardId} deleted from lane: ${laneId}`)
    }
    handleCardAdd = (card, laneId) => {
        console.log(`New card added to lane ${laneId}`)
        console.dir(card)
    }
    onCardClick = (cardId, metadata, laneId) => {
        alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)
    }

    constructor(props) {
        super(props)
        this.state = {
            moduleId:this.props.module._id,
            data: {lanes: [
                    {
                        id: 'lane1',
                        title: 'Planned Tasks',
                        label: '',
                        cards: []
                    },
                    {
                        id: 'lane2',
                        title: 'In Test',
                        label: '',
                        cards: [],


                    }, {
                        id: 'lane3',
                        title: 'Completed',
                        label: '',
                        cards: [],


                    }
                ]}
        }
        // console.clear()
        // console.log(this.state.data.lanes[2].cards.length)
        this.onDataChange.bind(this)
        this.onCardDelete.bind(this)
        this.onCardClick.bind(this)
        this.handleCardAdd.bind(this)
    }

    componentDidMount() {

         this.props.getTodosForModule(this.props.module._id)
    /*    axios
            .post(
                `http://localhost:2500/api/activity/getTodoByModule`,{moduleId: this.props.module._id}
            )
            .then(res => {
              //  console.log(res.data)
               //this.setState({data:res.data.result})
                //console.log(this.state.data)
              return res.data.result

            }).then(e=>{
                this.setState({data:e})
        })
            .catch(err =>
                ({
                    err:err
                })
            );*/
    }

    render() {
        const {moduleTodos, loading} = this.props.activity;
        const {fullActivity, module} = this.props
        if (loading || moduleTodos==null) {
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
        else {
          if(moduleTodos.allTodo[0]!=null)
          {  this.state.data =  {
                lanes: [
                    {
                        id: 'lane1',
                        title: 'Planned Tasks',
                        label: '',
                        cards: moduleTodos.allTodo[0]
                    },
                    {
                        id: 'lane2',
                        title: 'In Test',
                        label: '',
                        cards: [],


                    },
                    {
                        id: 'lane3',
                        title: 'Completed',
                        label: '',
                        cards: [],


                    }
                ]
            }}

            return (
                < React.Fragment>


                    <br/>

                    <div className="container">

                        <div className="row">

                            <div
                                className="col col-xl-12 order-xl-2 col-lg-12 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                                <div className="ui-block">

                                    <div className="ui-block-content">
                                        {/* Change Module Form */}
                                        <div>
                                            <div className="content-section implementation">
                                                <Board data={this.state.data} draggable editable id="EditableBoard1"
                                                       onDataChange={this.onDataChange}
                                                       laneDraggable={false}
                                                       onCardDelete={this.onCardDelete}
                                                       onCardAdd={this.handleCardAdd}
                                                       onCardClick={this.onCardClick}
                                                       style={{backgroundColor: '#eee'}}
                                                       newCardTemplate={<NewCard moduleId={this.state.moduleId} />}
                                                       tagStyle={{fontSize: '80%'}}
                                                />

                                            </div>


                                        </div>
                                        {/* ... end Change Module Form */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </React.Fragment>
            )



        }
    }
}


const mapStateToProps = state => ({
    activity: state.activity
});

export default connect(
    mapStateToProps,
    {getActivityById, getTodosForModule, CreateTodo}
)(todoBoard);
