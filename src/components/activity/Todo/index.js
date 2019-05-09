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
                this.setState({[field]: [{title: 'Hard', color: 'white', bgcolor: 'red'}]})
            }
             if (evt.target.value == "Very") {
                this.setState({[field]: [{title: 'Very Long', color: 'white', bgcolor: '#0079BF'}]})
            }
             if (evt.target.value == "High") {
                this.setState({[field]: [{title: 'High skills', color: 'white', bgcolor: '#61BD4F'}]})
            }
            if (evt.target.value == "One") {
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
                        , {
                            title: title,
                            description: description,
                            tags: tags,
                            label: label,
                            moduleId: this.props.moduleId
                        }
                    )
                    .then(res => {

                        swal("Nice!", "ToDo was created successfully !", "success");
                        console.log(res.data)
                    })
                    .catch(err =>
                        ({
                            err: err
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
                            <input className="form-control" type="text" onChange={evt => this.updateField('title', evt)} placeholder="Title"
                                   required={true}/>
                        </div>
                        <div style={{marginBottom: 5}}>
                            <input  className="form-control" type="textarea" onChange={evt => this.updateField('description', evt)}
                                   placeholder="Description" required={true}/>
                        </div>
                        <div style={{marginBottom: 5}}>
                            <input className="form-control" type="date" min="2019-04-26" onChange={evt => this.updateField('label', evt)}
                                   placeholder="End Date" required={true}/>
                        </div>
                        <div style={{marginBottom: 5}}>

                            <select  className="form-control" onChange={evt => this.updateField('tags', evt)}>
                                <option value="Hard">Hard</option>
                                <option value="High">High skill</option>
                                <option value="Very">Very long</option>
                                <option value="One">One more</option>
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
    constructor(props) {
        super(props)
        this.state = {
            activityId:props.id,
            eventBus: undefined,
            moduleId: this.props.module._id,
            data: {
                lanes: [
                    {
                        id: 'todo',
                        title: 'Planned Tasks',
                        label: '',
                        cards: [],
                        style: {width: 320, backgroundColor: '#3179ba', color: '#fff', boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'},
                        droppable: true,

                    },
                    {
                        id: 'intest',
                        title: 'In Test',
                        label: '',
                        cards: [],
                        style: {width: 320, backgroundColor: '#FF6347', color: '#fff', boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'},
                        droppable: true,




                    }, {
                        id: 'completed',
                        title: 'Completed',
                        label: '',
                        cards: [],
                        style: {width: 320, backgroundColor: '#4BB543 ', color: '#fff', boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)'},
                        droppable: true,


                    }
                ]
            }
        }
        this.onDataChange.bind(this)
        this.onCardDelete.bind(this)
        this.onCardClick.bind(this)
        this.handleCardAdd.bind(this)
        this.handleDragStart.bind(this)
        this.handleDragEnd.bind(this)
    }
    manageTodo = (moduleId,todoId,activityId,operation) => {
            if(operation==="add") {

                axios
                    .post(
                        `http://localhost:2500/api/activity/pushTodo`
                        , {
                            todoId: todoId,
                            activityId: activityId,
                            moduleId: moduleId
                        }
                    )
                    .then(res => {

                        swal("Nice!", "Request to validate TODO was sent successfully !", "success");
                        console.log(res.data)
                    })
                    .catch(err =>
                        ({
                            err: err
                        })
                    );

            }
            if(operation==="remove"){



                axios
                    .post(
                        `http://localhost:2500/api/activity/removeTodo`
                        , {
                            todoId: todoId,
                        }
                    )
                    .then(res => {

                        swal("Ooops!", "removed Request successfully !", "success");

                        console.log(res.data)
                    })
                    .catch(err =>
                        ({
                            err: err
                        })
                    );

            }
                //console.log(this.props.moduleId)

            if(operation==="validate"){
                axios
                    .post(
                        `http://localhost:2500/api/activity/validateRequest`
                        , {
                            todoId: todoId,
                            activityId: activityId,
                            moduleId: moduleId
                        }
                    )
                    .then(res => {

                        swal("Ooops!", "Completed TODO successfully !", "success");

                        console.log(res.data)
                    })
                    .catch(err =>
                        ({
                            err: err
                        })
                    );
            }



    }
    rollBack = (e,laneIdCurrent,laneIdTarget,cardIdCurrent,card) => {
        this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: cardIdCurrent, cardId:cardIdCurrent})
        this.state.eventBus.publish({
            type: 'ADD_CARD',
            laneId:laneIdTarget,
            card: card
        })
    }

    handleDragStart=(cardId, laneId)=>{

    }
    handleDragEnd=(cardId, sourceLaneId, targetLaneId, position, cardDetails)=>{
        //console.log("--------------------------- End Drag" ,position)
        //console.log(sourceLaneId,targetLaneId)
        if(sourceLaneId==="todo"){
          //  console.log("push to validation")
            //console.log(this.props)
            //console.log(cardDetails)

            this.manageTodo(this.props.module._id,cardDetails.id,this.props.module._id,"add")
            this.state.data.lanes[0].cards.splice(this.state.data.lanes[0].cards.indexOf(cardDetails),1)
        }
        if(sourceLaneId==="intest" && targetLaneId==="todo"){
            //console.log("delete from validation request")

            this.manageTodo(this.props.module._id,cardDetails.id,this.props.module._id,"remove")
            this.state.data.lanes[1].cards.splice(cardDetails,1)
        }
        if(sourceLaneId==="intest" && targetLaneId==="completed"){
           // console.log("validate from validation request")

            this.manageTodo(this.props.module._id,cardDetails.id,this.props.module._id,"validate")
            this.state.data.lanes[1].cards.splice(cardDetails,1)
        }

    }
    onDataChange = e => {
      // console.log("******************************** changing")

    }
    onCardDelete = (cardId, laneId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this TODO!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.post(
                        `http://localhost:2500/api/activity/deleteToDo`
                        , {
                            todoId: cardId,
                            moduleId: this.state.moduleId
                        }
                    )
                        .then(res => {

                            swal("Poof! TODO has been deleted!", {
                                icon: "success",
                            });
                        })
                        .catch(err =>
                            ({
                                err: err
                            })
                        );
                } else {
                    swal("TODO is safe!");
                }
            });
       // console.log(`Card: ${cardId} deleted from lane: ${laneId}`)


    }
    handleCardAdd = (card, laneId) => {
        console.log(`New card added to lane ${laneId}`)
        console.dir(card)
    }
    onCardClick = (cardId, metadata, laneId) => {
        alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)
    };
    setEventBus = handle => {
        this.state.eventBus = handle
    }



    componentDidMount() {

        this.props.getTodosForModule(this.props.module._id)

    }

    render() {
        const {moduleTodos, loading} = this.props.activity;


        let edits=true
        const {role}=this.props.auth.user
        //console.log("hello he is a ",role)
        if(role==="Student")
        {   edits=false
            this.state.data.lanes[2].droppable=false

        }
        if(role==="admin")
        {   edits=false
            this.state.data.lanes[0].droppable=false
            this.state.data.lanes[1].droppable=false
            this.state.data.lanes[2].droppable=false

        }
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
        else if (moduleTodos != null) {
            if (moduleTodos.allTodo != null) {



                console.log(moduleTodos);
               // this.state.data.lanes[0].cards=moduleTodos.todo[0]
                if(moduleTodos.todo.length!==0){
                    this.state.data.lanes[0].cards=[]
                        moduleTodos.todo.map(e=>{
                            const element= {
                                id: '',
                                title: '',
                                label:'',
                                description: '',
                                metadata: {cardId: ''},
                                tags: [
                                ]
                            }
                            element.id=e._id;
                            element.description=e.description;
                            element.title=e.name;
                            element.label=e.endDate;
                            element.tags=e.tag;

                                this.state.data.lanes[0].cards.push(element)



                        })
                    this.state.data.lanes[0].label=moduleTodos.todo.length+"/"+moduleTodos.todo.length
                }
                if(moduleTodos.completed.length!==0){
                    this.state.data.lanes[2].cards=[]
                    moduleTodos.completed.map(e=>{
                        let element= {
                            id: '',
                            title: '',
                            label:'',
                            description: '',
                            metadata: {cardId: ''},
                            tags: [
                            ]
                        }
                        element.id=e._id;
                        element.description=e.description;
                        element.title=e.name;
                        element.label=e.endDate;
                        element.tags=e.tag;

                            this.state.data.lanes[2].cards.push(element)

                    })
                    this.state.data.lanes[2].label=moduleTodos.completed.length+"/"+moduleTodos.completed.length
                }
                if(moduleTodos.intest.length!==0){
                    this.state.data.lanes[1].cards=[]
                    moduleTodos.intest.map(e=>{
                        var element= {
                            id: '',
                            title: '',
                            label:'',
                            description: '',
                            metadata: {cardId: ''},
                            tags: [
                            ]
                        }
                        element.id=e._id;
                        element.description=e.description;
                        element.title=e.name;
                        element.label=e.endDate;
                        element.tags=e.tag;
                            this.state.data.lanes[1].cards.push(element)

                    })
                    this.state.data.lanes[1].label=moduleTodos.intest.length+"/"+moduleTodos.intest.length

                }
                /* this.state.data = {
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
               }*/


            }
        }

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
                                            <h3>Enjoy managing TODO list easily !</h3>
                                            <Board data={this.state.data}  editable={edits} id="EditableBoard1"
                                                   onDataChange={this.onDataChange}
                                                   onCardDelete={this.onCardDelete}
                                                   handleDragStart={this.handleDragStart}
                                                   handleDragEnd={this.handleDragEnd}
                                                   eventBusHandle={this.setEventBus}
                                                   onCardAdd={this.handleCardAdd}
                                                   onCardClick={this.onCardClick}
                                                   style={{backgroundColor: 'transparent'}}
                                                   newCardTemplate={<NewCard moduleId={this.state.moduleId}/>}
                                                   tagStyle={{fontSize: '80%'}}
                                                   draggable
                                                   laneDraggable={false}
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


const mapStateToProps = state => ({
    auth: state.auth,
    activity: state.activity
});

export default connect(
    mapStateToProps,
    {getActivityById, getTodosForModule, CreateTodo}
)(todoBoard);
