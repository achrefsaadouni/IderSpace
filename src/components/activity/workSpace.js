import React, {Component} from "react";
import StyleLinks from "./StyleLinks"
import {TabMenu} from 'primereact/tabmenu';
import CreateModule from "./modules/createModule"
import TodoBoard from "./Todo/index"
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import connect from "react-redux/es/connect/connect";
import {getActivityById} from "../../store/actions/activityActions";

class workSpace extends Component {
    state = {
        id: "",
        step: 1,
        module: "",
        modules: [],
        fullActivity: "",
        activeItem: {label: 'Modules', icon: 'pi pi-fw pi-home'},
        items: [
            {label: 'Modules', icon: 'pi pi-fw pi-home'},
            {label: 'Activity Details', icon: 'pi pi-fw pi-file'},
            {label: 'Progress Stats', icon: 'pi pi-fw pi-file'}


        ]
    };
    todoList = e => {
        this.setState({module: e, step: 2})

    }
    todoLis = e => {
        this.setState({module: e, step: 3})

    }
    changeStep = (e) => {
        if (e.label == "Modules") {
            this.setState({activeItem: e})
            this.setState({step: 1})
        }

        if (e.label == "Activity Details") {
            this.setState({activeItem: e})
            this.setState({step: 3})
        }
        if (e.label == "Progress Stats") {
            this.setState({activeItem: e})
            this.setState({step: 4})
        }

    }
    setModule = e => {
        this.setState({module: e})
    }

    constructor(props) {
        super(props);
        let x = this.props.match.params.activity_id
        this.state.id = x


    }
    componentDidMount() {

        this.props.getActivityById(this.state.id)
    }

    render() {

        const {workspaceActivity, activityMembers, modulecreation, loading} = this.props.activity;
        const {step, id, module} = this.state;
        switch (step) {
            case 1:
                return (
                    <React.Fragment>
                        <StyleLinks/>
                        <div className="header-spacer"/>
                        <div className="container">
                            <div className="row">
                                {/* Main Content */}
                                <main
                                    className="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                                    <div className="ui-block">
                                        {/* News Feed Form  */}
                                        <div className="news-feed-form">

                                            <TabMenu model={this.state.items} activeItem={this.state.activeItem}
                                                     onTabChange={(e) => this.changeStep(e.value)}/>

                                        </div>
                                        {/* ... end News Feed Form  */}            </div>
                                    <div id="newsfeed-items-grid">
                                        <div className="ui-block">
                                            <CreateModule fullActivity={this.state.fullActivity} id={this.state.id}
                                                          step={step} module={module} setModule={this.setModule}
                                                          todoList={this.todoList.bind(this)}
                                                          todoLis={this.todoLis.bind(this)}/>
                                        </div>
                                    </div>
                                    <a id="load-more-button" href="#" className="btn btn-control btn-more"
                                       data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"/>
                                        </svg>
                                    </a>
                                </main>

                            </div>
                        </div>
                    </React.Fragment>
                );
            case 2:
                return (
                    <React.Fragment>
                        <div className="header-spacer"/>
                        <div className="container">
                            <div className="row">
                                {/* Main Content */}
                                <main
                                    className="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                                    <div className="ui-block">
                                        {/* News Feed Form  */}
                                        <div className="news-feed-form">
                                            <StyleLinks/>
                                            <TabMenu model={this.state.items} activeItem={this.state.activeItem}
                                                     onTabChange={(e) => this.changeStep(e.value)}/>

                                        </div>
                                        {/* ... end News Feed Form  */}            </div>
                                    <div id="newsfeed-items-grid">
                                        <div className="ui-block">
                                            <TodoBoard fullActivity={this.state.fullActivity} id={this.state.id}
                                                       module={this.state.module}/>
                                        </div>
                                    </div>
                                    <a id="load-more-button" href="#" className="btn btn-control btn-more"
                                       data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"/>
                                        </svg>
                                    </a>
                                </main>

                            </div>
                        </div>
                    </React.Fragment>
                );
            case 3:


                return (
                    <React.Fragment>
                        <div className="header-spacer"/>
                        <div className="container">
                            <div className="row">
                                {/* Main Content */}
                                <main
                                    className="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                                    <div className="ui-block">
                                        {/* News Feed Form  */}
                                        <div className="news-feed-form">
                                            <StyleLinks/>
                                            <TabMenu model={this.state.items} activeItem={this.state.activeItem}
                                                     onTabChange={(e) => this.changeStep(e.value)}/>

                                        </div>
                                        {/* ... end News Feed Form  */}            </div>
                                    <div id="newsfeed-items-grid">
                                        <div className="ui-block">
                                            <div
                                                className="col col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                                                <div className="ui-block">
                                                    <div className="ui-block-title">
                                                        <h6 className="title">Activty details</h6>
                                                        <a href="#" className="more">
                                                            <svg className="olymp-three-dots-icon">
                                                                <use xlinkHref="#olymp-three-dots-icon"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="ui-block-content">
                                                        <div className="row">
                                                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                                {/* W-Personal-Info */}
                                                                <ul className="widget w-personal-info item-block">
                                                                    <li>
                                                                        <span className="title">Description:</span>
                                                                        <span className="text">I like to ride the bike to work, swimming, and working out. I also like
                                                       reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.
              </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="title">Title:</span>
                                                                        <span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="title">Members :</span>
                                                                        <span className="text">Mahmoud Ghorbel. </span>
                                                                    </li>

                                                                </ul>
                                                                {/* ... end W-Personal-Info */}
                                                            </div>
                                                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                                                {/* W-Personal-Info */}
                                                                <ul className="widget w-personal-info item-block">
                                                                    <li>
                                                                        <span className="title">Modules:</span>
                                                                        <span className="text">1 Module is present right now check it from modules list.</span>
                                                                    </li>

                                                                </ul>
                                                                {/* ... end W-Personal-Info */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <a id="load-more-button" href="#" className="btn btn-control btn-more"
                                       data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"/>
                                        </svg>
                                    </a>
                                </main>

                            </div>
                        </div>
                    </React.Fragment>
                );

            case 4:
                return (<React.Fragment>
                    <div className="header-spacer"/>
                    <div className="container">
                        <div className="row">
                            {/* Main Content */}
                            <main className="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                                <div className="ui-block">
                                    {/* News Feed Form  */}
                                    <div className="news-feed-form">
                                        <StyleLinks/>
                                        <TabMenu model={this.state.items} activeItem={this.state.activeItem}
                                                 onTabChange={(e) => this.changeStep(e.value)}/>

                                    </div>
                                    {/* ... end News Feed Form  */}            </div>
                                <div   className="ui-block">
                                {workspaceActivity.result != null &&
                                <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <ReactMinimalPieChart

                                        data={[
                                            {
                                                title: 'TODO',
                                                value: 1,
                                                color: '#E38627'
                                            },
                                            {
                                                title: 'DONE',
                                                value: 0,
                                                color: '#C13C37'
                                            },
                                            {
                                                title: 'In TEST',
                                                value: 5,
                                                color: '#6A2135'
                                            }
                                        ]}
                                        lengthAngle={-360}
                                        animate
                                    />
                                </div>
                                }
                                {workspaceActivity.result == null &&
                                <div >
                                    <ReactMinimalPieChart
                                        style={{height:"20%"}}
                                        data={[
                                            {
                                                title: 'TODO',
                                                value: 5,
                                                color: '#E38627'
                                            },
                                            {
                                                title: 'DONE',
                                                value: 0,
                                                color: '#C13C37'
                                            },
                                            {
                                                title: 'In TEST',
                                                value: 2,
                                                color: '#6A2135'
                                            }
                                        ]}
                                        lengthAngle={-360}
                                        animate
                                    />
                                </div>
                                }
                                </div>
                                <a id="load-more-button" href="#" className="btn btn-control btn-more"
                                   data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
                                    <svg className="olymp-three-dots-icon">
                                        <use xlinkHref="#olymp-three-dots-icon"/>
                                    </svg>
                                </a>
                            </main>

                        </div>
                    </div>
                </React.Fragment>);

        }


    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    activity: state.activity
});

export default connect(
    mapStateToProps,
    {getActivityById}
)(workSpace);
