import React, {Component} from "react";
import StyleLinks from "./StyleLinks"
import {TabMenu} from 'primereact/tabmenu';
import CreateModule from "./modules/createModule"
import TodoBoard from "./Todo/index"
import ToDoList from "./Todo/ToDoList";

export default class workSpace extends Component {
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

    render() {


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
                                            <ToDoList todoLis={this.todoLis} fullActivity={this.state.fullActivity}
                                                      id={this.state.id} module={this.state.module}/>
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
                                <div id="newsfeed-items-grid">
                                    <div className="ui-block">
                                        <div className="row">
                                            <div className="col col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                                                <div className="ui-block responsive-flex" data-mh="pie-chart"
                                                     style={{height: '394px'}}>
                                                    <div className="ui-block-title">
                                                        <div className="h6 title">Lines Graphic</div>
                                                        <div className="form-group">
                                                            <div
                                                                className="btn-group bootstrap-select form-control without-border">
                                                                <button type="button"
                                                                        className="btn dropdown-toggle btn-secondary"
                                                                        data-toggle="dropdown" role="button"
                                                                        title="LAST 3 MONTH"><span
                                                                    className="filter-option pull-left">LAST 3 MONTH</span>&nbsp;
                                                                    <span className="bs-caret"><span className="caret"/></span>
                                                                </button>
                                                                <div className="dropdown-menu open" role="combobox">
                                                                    <ul className="dropdown-menu inner" role="listbox"
                                                                        aria-expanded="false">
                                                                        <li data-original-index={0}
                                                                            className="selected"><a tabIndex={0}
                                                                                                    className=" dropdown-item"
                                                                                                    style={{}}
                                                                                                    data-tokens="null"
                                                                                                    role="option"
                                                                                                    aria-disabled="false"
                                                                                                    aria-selected="true"><span
                                                                            className="text">LAST 3 MONTH</span><span
                                                                            className="glyphicon glyphicon-ok check-mark"/></a>
                                                                        </li>
                                                                        <li data-original-index={1}><a tabIndex={0}
                                                                                                       className=" dropdown-item"
                                                                                                       style={{}}
                                                                                                       data-tokens="null"
                                                                                                       role="option"
                                                                                                       aria-disabled="false"
                                                                                                       aria-selected="false"><span
                                                                            className="text">LAST YEAR (2016)</span><span
                                                                            className="glyphicon glyphicon-ok check-mark"/></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <select
                                                                    className="selectpicker form-control without-border"
                                                                    tabIndex={-98}>
                                                                    <option value="CUR">LAST 3 MONTH</option>
                                                                    <option value="LY">LAST YEAR (2016)</option>
                                                                </select></div>
                                                            <span className="material-input"/></div>
                                                        <div className="points align-right">
          <span>
            <span className="statistics-point bg-yellow"/>
            THIS YEAR
          </span>
                                                            <span>
            <span className="statistics-point bg-primary"/>
            LAST YEAR
          </span>
                                                        </div>
                                                        <a href="#" className="more">
                                                            <svg className="olymp-three-dots-icon">
                                                                <use xlinkHref="#olymp-three-dots-icon"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="ui-block-content">
                                                        <div className="chart-js chart-js-line-graphic">
                                                            <iframe className="chartjs-hidden-iframe" tabIndex={-1}
                                                                    style={{
                                                                        display: 'block',
                                                                        overflow: 'hidden',
                                                                        border: '0px',
                                                                        margin: '0px',
                                                                        top: '0px',
                                                                        left: '0px',
                                                                        bottom: '0px',
                                                                        right: '0px',
                                                                        height: '100%',
                                                                        width: '100%',
                                                                        position: 'absolute',
                                                                        pointerEvents: 'none',
                                                                        zIndex: -1
                                                                    }}/>
                                                            <canvas id="line-graphic-chart" width={522} height={214}
                                                                    style={{
                                                                        display: 'block',
                                                                        width: '522px',
                                                                        height: '214px'
                                                                    }}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                                                <div className="ui-block" data-mh="pie-chart" style={{height: '394px'}}>
                                                    <div className="ui-block-title">
                                                        <div className="h6 title">Colors Pie Chart</div>
                                                        <a href="#" className="more">
                                                            <svg className="olymp-three-dots-icon">
                                                                <use xlinkHref="#olymp-three-dots-icon"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="ui-block-content">
                                                        <div className="chart-with-statistic">
                                                            <ul className="statistics-list-count">
                                                                <li>
                                                                    <div className="points">
                <span>
                  <span className="statistics-point bg-purple"/>
                  ToDO Updates
                </span>
                                                                    </div>
                                                                    <div className="count-stat">8</div>
                                                                </li>
                                                                <li>
                                                                    <div className="points">
                <span>
                  <span className="statistics-point bg-breez"/>
                  Photos
                </span>
                                                                    </div>
                                                                    <div className="count-stat">0</div>
                                                                </li>
                                                                <li>
                                                                    <div className="points">
                <span>
                  <span className="statistics-point bg-primary"/>
                  Modules
                </span>
                                                                    </div>
                                                                    <div className="count-stat">0</div>
                                                                </li>
                                                                <li>
                                                                    <div className="points">
                <span>
                  <span className="statistics-point bg-yellow"/>
                  TODO
                </span>
                                                                    </div>
                                                                    <div className="count-stat">0</div>
                                                                </li>
                                                            </ul>
                                                            <div className="chart-js chart-js-pie-color">
                                                                <iframe className="chartjs-hidden-iframe" tabIndex={-1}
                                                                        style={{
                                                                            display: 'block',
                                                                            overflow: 'hidden',
                                                                            border: '0px',
                                                                            margin: '0px',
                                                                            top: '0px',
                                                                            left: '0px',
                                                                            bottom: '0px',
                                                                            right: '0px',
                                                                            height: '100%',
                                                                            width: '100%',
                                                                            position: 'absolute',
                                                                            pointerEvents: 'none',
                                                                            zIndex: -1
                                                                        }}/>
                                                                <canvas id="pie-color-chart" width={133} height={133}
                                                                        style={{
                                                                            display: 'block',
                                                                            width: '133px',
                                                                            height: '133px'
                                                                        }}/>
                                                                <div className="general-statistics">0
                                                                    <span>Last Month Posts</span>
                                                                </div>
                                                            </div>
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
                </React.Fragment>);

        }


    }
}