import React, {Component} from 'react';
import Hobbies from './hobbies';


async function verifyExistance(tab, val) {
    return new Promise((resolve) => {
        var etat = true;
        for (const element of tab) {
            if (element === val) {
                var index = tab.indexOf(element);
                tab.splice(index, 1);
                etat = false
            }
        }
        if (etat === true) {
            tab.push(val)
        }
        return resolve(tab);
    });
}

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

class SetHobbies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hobbie: [{
                id: 1,
                name: 'Traveling',
                url: "img/info1.png",
                etat:false,
            }, {
                id: 2,
                name: 'Programming',
                url: "img/info2.png",
                etat:false,
            }, {
                id: 3,
                name: 'Gaming',
                url: "img/info6.png",
                etat:false,
            }, {
                id: 4,
                name: 'Sport',
                url: "img/sport.jpg",
                etat:false,
            }, {
                id: 5,
                name: 'Reading',
                url: "img/book.png",
                etat:false,
            }, {
                id: 6,
                name: 'Music',
                url: "img/music.png",
                etat:false,
            },
            ],
            selectedHobbies: []
        };
    }

    onClickSelect = async e => {
        var {selectedHobbies} = this.state;
        const verify = await verifyExistance(selectedHobbies, e).then(res => {
            //console.log(e.target.value)

            this.setState({
                tab: res
            })

        });
    };

    onClickNext = e => {
        this.props.onClick(60);
    };


    onClickPrevious = e => {
        this.props.onClick(0);
    };

    newetatfunction = async id => {
        var listHobbies = this.props.getIdHobbies;
        const {hobbie} = this.state;
        var etat = await verifyExistanceBool(listHobbies, id);
        if (etat === false) {
            const hobname = hobbie.filter(hobb => hobb.id === id);
            this.props.addIdToList(hobname[0].name);
            const newHobbie = hobbie[id - 1];
            newHobbie.etat = !newHobbie.etat;
            hobbie[id - 1] = newHobbie;
            if (newHobbie.etat === false) {
                this.setState({hobbie: hobbie});

            } else {
                this.setState({hobbie: hobbie});

            }
        } else {
            listHobbies = verifyExistance(listHobbies, id);
            const newHobbie = hobbie[id - 1];
            newHobbie.etat = !newHobbie.etat;
            hobbie[id - 1] = newHobbie;
            if (newHobbie.etat === false) {
                this.setState({hobbie: hobbie});

            } else {
                this.setState({hobbie: hobbie});

            }
        }

    }

    render() {
        const {hobbie} = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row mb60">
                        <br/>
                        <div className="col col-xl-10 col-lg-10 col-md-12 col-sm-12  m-auto">


                            <ul className="table-careers">


                                <li>
                                    <center> <span className="type bold">Add your Hobbies</span></center>
                                </li>


                            </ul>

                        </div>
                    </div>

                    <div className="info-box-wrap">
                        <div className="row">

                            {hobbie.map(hobbie => (
                                <Hobbies key={hobbie.id} hobbie={hobbie} listId={this.props.getIdHobbies} onClick={this.onClickSelect.bind(this)}  verifyEtatHandler={this.newetatfunction.bind(this,hobbie.id)} />
                            ))}

                        </div>
                    </div>
                    <ul className="pagination justify-content-center">
                        <li className="page-item ">
                            <button className="page-link" onClick={this.onClickPrevious.bind(this)}>Previous</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={this.onClickNext.bind(this)}>Next</button>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default SetHobbies;
