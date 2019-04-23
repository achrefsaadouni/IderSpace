import React, {Component} from 'react';

class Finishing extends Component {
    onClick =  e => {
        this.props.onClick(e);

    }
    render() {
        return (
            <section className="align-right pt160 pb80 section-move-bg call-to-action-animation scrollme">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-12 m-auto col-lg-10 col-md-12 col-sm-12 col-12">
                            <button className="btn btn-primary btn-lg" data-toggle="modal"
                                    data-target="#registration-login-form-popup" onClick={this.onClick.bind(this)}>Finish</button>
                        </div>
                    </div>
                </div>
                <img className="first-img" alt="guy" src="img/guy.png"
                     style={{opacity: '1', bottom: '0px', transform: 'scale(1)'}}/>

                <div className="content-bg-wrap bg-section1"/>
            </section>
        );
    }
}

export default Finishing;
