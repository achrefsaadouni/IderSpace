import React, {Component} from "react";
import StyleLinks from "./StyleLinks"
import {TabMenu} from 'primereact/tabmenu';
import CreateModule from "./modules/createModule"
import TodoBoard from "./Todo/index"
import ModuleItem from "./modules/moduleItem"
import ToDoList from "./Todo/ToDoList";

export default class workSpace extends Component {
    constructor(props){
        super(props);
        let x=this.props.match.params.activity_id
        this.state.id=x


    }

    state = {
        id:"",
        step :1,
        module:"",
        modules:[],
        fullActivity:"",
        activeItem: {label: 'Modules', icon: 'pi pi-fw pi-home'},
        items: [
            {label: 'Modules', icon: 'pi pi-fw pi-home'},
            {label: 'TODOS', icon: 'pi pi-fw pi-pencil'},
            {label: 'Activity Details', icon: 'pi pi-fw pi-file'},
            {label: 'Progress Stats', icon: 'pi pi-fw pi-calendar'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ]
    };

    todoList=e=>{
        this.setState({module:e,step:2})

    }
    todoLis=e=>{
        this.setState({module:e,step:3})

    }
    changeStep=(e)=>{
     if (e.label=="Modules") {
         this.setState({activeItem: e})
         this.setState({step: 1})
     }
        if (e.label=="TODOS") {
            this.setState({activeItem: e,step: 2})
            this.setState({step: 2})
        }
        if (e.label=="Activity Details") {
            this.setState({activeItem: e})
            this.setState({step: 3})
        }
        if (e.label=="Progress Stats") {
            this.setState({activeItem: e})
            this.setState({step: 4})
        }
        if (e.label=="Settings") {
            this.setState({activeItem: e})
            this.setState({step: 5})
        }
    }
    setModule=e=>{
        this.setState({module:e})
    }

    render() {


        const {step,id,module} = this.state;
        switch (step) {
            case 1:
                return (
                    <React.Fragment>
                        <StyleLinks/>
                        <div className="header-spacer"/>
                        <div className="container">
                            <div className="row">
                                {/* Main Content */}
                                <main className="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                                    <div className="ui-block">
                                        {/* News Feed Form  */}
                                        <div className="news-feed-form">

                                            <TabMenu model={this.state.items}  activeItem={this.state.activeItem}
                                                     onTabChange={(e) => this.changeStep(e.value)}/>

                                        </div>
                                        {/* ... end News Feed Form  */}			</div>
                                    <div id="newsfeed-items-grid">
                                        <div className="ui-block">
                                        <CreateModule fullActivity={this.state.fullActivity} id={this.state.id} step={step} module={module} setModule={this.setModule} todoList={this.todoList.bind(this)} todoLis={this.todoLis.bind(this)}/>
                                        </div>
                                    </div>
                                    <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
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
                                <main className="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                                    <div className="ui-block">
                                        {/* News Feed Form  */}
                                        <div className="news-feed-form">
                                            <StyleLinks/>
                                            <TabMenu model={this.state.items} activeItem={this.state.activeItem}
                                                     onTabChange={(e) => this.changeStep(e.value)}/>

                                        </div>
                                        {/* ... end News Feed Form  */}			</div>
                                    <div id="newsfeed-items-grid">
                                        <div className="ui-block">
                                            <TodoBoard fullActivity={this.state.fullActivity} id={this.state.id} module={this.state.module} />
                                        </div>
                                    </div>
                                    <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
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
                                <main className="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                                    <div className="ui-block">
                                        {/* News Feed Form  */}
                                        <div className="news-feed-form">
                                            <StyleLinks/>
                                            <TabMenu model={this.state.items} activeItem={this.state.activeItem}
                                                     onTabChange={(e) => this.changeStep(e.value)}/>

                                        </div>
                                        {/* ... end News Feed Form  */}			</div>
                                    <div id="newsfeed-items-grid">
                                        <div className="ui-block">
                                            <ToDoList  todoLis={ this.todoLis} fullActivity={this.state.fullActivity} id={this.state.id} module={this.state.module}/>
                                        </div>
                                    </div>
                                    <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                                </main>

                            </div>
                        </div>
                    </React.Fragment>
                );
            case 4:
                return ( <React.Fragment>
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
                                    {/* ... end News Feed Form  */}			</div>
                                <div id="newsfeed-items-grid">
                                    <div className="ui-block">
                   <h1>secionddd</h1>
                                    </div>
                                </div>
                                <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                            </main>

                        </div>
                    </div>
                </React.Fragment>);
            case 5:
                return ( <React.Fragment>
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
                                    {/* ... end News Feed Form  */}			</div>
                                <div id="newsfeed-items-grid">
                                    <div className="ui-block">
                                        <h1>secionddd</h1>
                                    </div>
                                </div>
                                <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid"><svg className="olymp-three-dots-icon"><use xlinkHref="#olymp-three-dots-icon" /></svg></a>
                            </main>

                        </div>
                    </div>
                </React.Fragment>);

        }


    }
}