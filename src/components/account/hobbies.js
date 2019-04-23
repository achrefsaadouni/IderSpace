import React, {Component} from 'react';

async function verifyExistanceBool(tab, val) {
    return new Promise((resolve) => {
        var etat = false;
        for (const element of tab) {
            if (element === val) {
                etat = true
            }
        }
        return resolve(etat);
    });
}

class Hobbies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            show: this.props.hobbie.etat,
            listId: this.props.listId
        };
        this.clickToBlur = this.clickToBlur.bind(this);

    }

    clickToBlur = () => {
        this.props.verifyEtatHandler();
        if (this.state.show === false) {
            this.props.onClick(this.props.hobbie.name);
        } else {
            this.props.onClick(this.props.hobbie.name);
        }
        /*  if (this.state.filter === "") {
              this.setState({filter: "blur(8px)"})
          } else {
              this.setState({filter: ""})
          }*/
    }

    clickImage() {

    }

    componentWillReceiveProps(newProps) {

    }

    changestate() {
        this.setState({show: true})
    }


    render() {
        const {filter, show, listId} = this.state;
        var list = listId;
        let inTable = false;
        const hob = this.props.hobbie;
       for (let i=0 ; i<list.length ; i++){
           if (hob.name === list[i])
               inTable = true;
       }
        if (inTable === true ) {
            return (
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">


                    <div className="crumina-module crumina-info-box" data-mh="box--classic"
                         style={{Height: '263px'}}>
                        <div className="info-box-image" onClick={this.clickToBlur}>
                            <div>
                                <img value={hob.name}
                                     style={{width: '108px', position: "relative", zIndex: "2"}}
                                     src="img/checkmark.gif"/>
                            </div>
                        </div>

                        <div className="info-box-content">
                            <h3 className="info-box-title">{hob.name}</h3>
                        </div>
                    </div>

                </div>
            );
        } else {

            return (
                <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">


                    <div className="crumina-module crumina-info-box" data-mh="box--classic"
                         style={{Height: '263px'}}>
                        <div className="info-box-image" onClick={this.clickToBlur}>
                            <div>
                                <img value={hob.name} hidden={this.props.hobbie.etat} src={hob.url} alt="icon"
                                     style={{filter, position: "relative", zIndex: "1"}}/>
                                <img value={hob.name} hidden={!this.props.hobbie.etat}
                                     style={{width: '108px', position: "relative", zIndex: "2"}}
                                     src="img/checkmark.gif"/>
                            </div>
                        </div>

                        <div className="info-box-content">
                            <h3 className="info-box-title">{hob.name}</h3>
                        </div>
                    </div>

                </div>
            );
        }
    }
}

export default Hobbies;
