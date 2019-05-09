import React, {Component} from "react";
import BarLoader from 'react-spinners/BarLoader'
import connect from "react-redux/es/connect/connect";
import {CreateModule, getActivityById, getActivityMembers} from "../../../store/actions/activityActions";
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';
import {Dropdown} from 'primereact/dropdown';

import {Dialog} from 'primereact/dialog';
import StyleLinks from "../StyleLinks";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


import Moment from "react-moment";
class createModule extends Component {

    constructor(props) {
        super(props)

        this.state = {
            step:this.props.step,
            activityId: this.props.id,
            cars: [],
            layout: 'list',
            selectedCar: null,
            visible: false,
            sortKey: null,
            sortOrder: null,
            validated: false,
            title: "",
            description: "",
            responsible: "",
            hid: true,alert:true


        }
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onCarChange2 = this.onCarChange2.bind(this);
        this.create = this.create.bind(this);






    }


    componentDidMount() {

        this.props.getActivityById(this.props.id)
    }
    update(){
        this.state.hid=true
    }

    create() {

        if (this.state.hid)
            this.setState({hid: false})
        else
            this.setState({hid: true})
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1,
                sortField: value.substring(1, value.length),
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1,
                sortField: value,
                sortKey: value
            });
        }
    }
    renderListItem(car) {

        return (


            <div className="ui-block">
                <div className="birthday-item inline-items badges">

                    <div style={{marginRight:"20px"}}>

                        <button className="btn btn-danger" onClick={e=>{this.props.todoLis(car)}}> <i className="fa fa-trash" aria-hidden="true"></i></button>
                        <button className="btn btn-secondary" onClick={e=>{this.props.todoList(car)}}> <i className="fa fa-address-book" aria-hidden="true"></i></button>
                    </div>

                    <div className="author-thumb">
                        <img src="/img/badge1.png" alt="author"/>
                    </div>
                    <div className="birthday-author-name"  onClick={(e) => this.setState({selectedCar: car, visible: true})}>
                        <a href="#" className="h6 author-name">{car.title}</a>
                        <div className="birthday-date"> <Moment format="dddd MM, YYYY \at HH:mm">{car.createdAt}</Moment></div>

                    </div>

                    <div className="skills-item">
                        <div className="skills-item-meter">
                            <span className="skills-item-meter-active skills-animate"
                                  style={{width: car.progress + '%', opacity: 1}}/>
                        </div>

                    </div>

                </div>
            </div>


        );
    }

    renderGridItem(car) {
        return (
            <div style={{padding: '.5em'}} className="p-col-12 p-md-3">
                <Panel header={car.title} style={{textAlign: 'center'}}>
                    <div className="circle-progress circle-pie-chart">
                        <div className="pie-chart" data-value={car.progress / 100} data-startcolor="#38a9ff"
                             data-endcolor="#317cb6">
                            <canvas width={360} height={360}/>
                            <div className="content">{car.progress}<span>%</span></div>
                        </div>
                    </div>

                    <div className="car-detail">{car.start_date} - {car.description}</div>
                    <hr className="ui-widget-content" style={{borderTop: 0}}/>
                    <Button icon="pi pi-search" onClick={(e) => this.setState({selectedCar: car, visible: true})}/>
                </Panel>
            </div>
        );
    }

    itemTemplate(car, layout) {
        if (!car) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(car);
        else if (layout === 'grid')
            return this.renderGridItem(car);
    }

    renderCarDialogContent() {
        if (this.state.selectedCar) {
            return (
                <div className="p-grid" style={{fontSize: '16px', textAlign: 'center', padding: '20px'}}>
                    <div className="p-col-12" style={{textAlign: 'center'}}>
                        <div className="circle-progress circle-pie-chart">
                            <div className="pie-chart" data-value="0.68" data-startcolor="#38a9ff"
                                 data-endcolor="#317cb6">
                                <canvas width={360} height={360}/>
                                <div className="content">68<span>%</span></div>
                            </div>
                        </div>

                    </div>

                    <div className="p-col-4">Title:</div>
                    <div className="p-col-8">{this.state.selectedCar.title}</div>

                    <div className="p-col-4">Description:</div>
                    <div className="p-col-8">{this.state.selectedCar.description}</div>

                    <div className="p-col-4">started at:</div>
                    <div className="p-col-8">{this.state.selectedCar.start_date}</div>

                    <div className="p-col-4">Progress:</div>
                    <div className="p-col-8">{this.state.selectedCar.progress}%</div>
                </div>
            );
        }
        else {
            return null;
        }
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        console.clear()
        event.preventDefault();
        if (form.checkValidity() !== false && this.state.responsible !== "") {
            event.preventDefault();
            event.stopPropagation();
            const {title, activityId, responsible, description} = this.state
            this.props.CreateModule(activityId, title, responsible, description)
            this.state.hid=true
        }
        this.setState({validated: true});



    }

    onCarChange2(e) {
        this.setState({car2: e.value});
        this.state.responsible = e.value
    }

    renderHeader() {
        const sortOptions = [
            {label: 'Newest First', value: '!start_date'},
            {label: 'Oldest First', value: 'start_date'},
            {label: 'Progress', value: 'progress'}
        ];

        return (
            <div className="p-grid" style={{display: "flex", justifyContent: "space-between"}}>
                <div className="p-col-4" style={{textAlign: 'left'}}>
                    <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By"
                              onChange={this.onSortChange}/>
                </div>
                {this.props.auth.user.role == "teacher" &&
                <div className="p-col-4" style={{textAlign: 'center'}}>
                    <Button label="New"
                            onClick={this.create} className="p-button-raised p-button-rounded"/>
                </div>
                }
                <div className="p-col-4" style={{textAlign: 'right'}}>
                    <DataViewLayoutOptions layout={this.state.layout}
                                           onChange={(e) => this.setState({layout: e.value})}/>
                </div>

            </div>

        );
    }

    carTemplate(option) {
        if (!option.image) {
            return option.label;
        }
        else {
            var logoPath = option.image;

            return (
                <div className="p-clearfix">
                    <img alt={option.label} src={logoPath} style={{display: 'inline-block', margin: '5px 0 0 5px'}}
                         width="24"/>
                    <span style={{float: 'right'}}>{option.label}</span>
                </div>
            );
        }
    }


    render() {

        const header = this.renderHeader();
        const {workspaceActivity,modulecreation, loading} = this.props.activity;
        const {validated} = this.state;


        if (loading ) {

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

         if ( workspaceActivity != null) {
                    if(modulecreation!=null) {
                        if (modulecreation.result === "already exists in your modules") {
                            console.log("error")
                            this.state.alert=false
                        }
                        else {
                            this.state.alert=true
                            this.state.cars.push(modulecreation.result)
                            this.state.cars.reverse()
                        }
                    }
                    else{
                       this.state.cars=workspaceActivity.result.modules
                        this.state.cars.reverse()
                    }
            let cars = []
            if(workspaceActivity.result.members.length!==0){   workspaceActivity.result.members.map(e => {


                let x = {label: '', value: '', image: ''}
                x.label = e.firstname + " " + e.lastname
                x.value = e._id
                x.image = e.profileImage
                cars.push(x)

            })}


            let getLength
            if(this.state.cars.length<=7){

                getLength=this.state.cars.length
            }
            else {

                getLength=5
            }



            return (

                < React.Fragment>


                    <br/>

                    <div className="container">

                        <div className="row">

                            <div
                                className="col col-xl-12 order-xl-2 col-lg-12 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                                <div className="ui-block">
                                    <div className="ui-block-title">
                                        <h6 className="title">Welcome To your <a
                                            href="/">{workspaceActivity.result.title}</a> workspace</h6>
                                    </div>
                                    <div className="ui-block-content">
                                        {/* Change Module Form */}
                                        <div hidden={this.state.hid}>
                                            <div className="ui-block-content">

                                                <div className="alert alert-danger" hidden={this.state.alert}>
                                                    <strong>Danger!</strong> Indicates a dangerous or potentially
                                                    negative action.
                                                </div>
                                                <Form
                                                    noValidate
                                                    validated={validated}
                                                    onSubmit={e => this.handleSubmit(e)}
                                                >

                                                    <Form.Row>
                                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                                            <Form.Label>Title</Form.Label>
                                                            <Form.Control

                                                                required
                                                                type="text"
                                                                placeholder="Module Title"
                                                                onChange={e => {
                                                                    this.state.title = e.target.value
                                                                }}

                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                            <br/><br/>
                                                            <label>Members</label>
                                                            <StyleLinks/>
                                                            <Dropdown style={{width:"100%"}} value={this.state.car2} options={cars}
                                                                      onChange={this.onCarChange2}
                                                                      itemTemplate={this.carTemplate}
                                                                      placeholder="members" filter={true}
                                                                      filterPlaceholder="Select Member"
                                                                      filterBy="label,value"
                                                                      showClear={true}/>

                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                            <Form.Label>Description</Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                required
                                                                onChange={e => {
                                                                    this.state.description = e.target.value
                                                                }}
                                                                placeholder="Module Description"

                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        </Form.Group>


                                                    </Form.Row>

                                                    <br/><br/>
                                                    <div className="row">

                                                        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                            <button type="submit"
                                                                    className="btn btn-primary btn-lg full-width"
                                                            >Save all Changes
                                                                <div className="ripple-container"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="content-section introduction">
                                                <div className="feature-intro">
                                                    <p>This view displays data in grid or list layout with pagination,
                                                        sorting and filtering features.</p>
                                                </div>
                                            </div>

                                            <div className="content-section implementation">

                                                <DataView value={this.state.cars} layout={this.state.layout}
                                                          header={header}
                                                          itemTemplate={this.itemTemplate} paginatorPosition={'both'}
                                                          paginator={true} rows={getLength}
                                                          rowsPerPageOptions={[5, 10, 20]}
                                                          sortOrder={this.state.sortOrder}
                                                          sortField={this.state.sortField}/>

                                                <Dialog header="Car Details" visible={this.state.visible} width="225px"
                                                        modal={true} onHide={() => this.setState({visible: false})}>
                                                    {this.renderCarDialogContent()}
                                                </Dialog>
                                            </div>


                                        </div>
                                        {/* ... end Change Module Form */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </React.Fragment>
            );
        }
        else window.location.reload()


    }


}

const mapStateToProps = state => ({
    auth: state.auth,
    activity: state.activity
});

export default connect(
    mapStateToProps,
    {getActivityById, getActivityMembers, CreateModule}
)(createModule);
