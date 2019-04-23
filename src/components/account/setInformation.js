import React, {Component} from 'react';

class SetInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    onClickNext = e => {
        this.props.onClick(100);
    };
    onClickPrevious = e => {
        this.props.onClick(35);
    };

    updateInputAbout(event) {
        this.props.onaddAbout(event.target.value)

    }
    updateInputLinkedIn(event) {
        this.props.onaddLinkedIn(event.target.value)

    }
    updateInputFacebook(event) {
        this.props.onaddFb(event.target.value)

    }


    render() {
        return (
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <br/>
                <div className="form-group label-floating">
                    <label className="control-label">Write a little description about you</label>
                    <textarea className="form-control" placeholder="" value={this.props.about} onChange={this.updateInputAbout.bind(this)}/>
                    <span className="material-input"/></div>
                <div className="form-group with-icon label-floating">
                    <label className="control-label">Your Facebook Account</label>
                    <input className="form-control" type="text"  onChange={this.updateInputFacebook.bind(this)}/>
                    <svg className="svg-inline--fa fa-facebook-f fa-w-9 c-facebook" aria-hidden="true"
                         data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 264 512" data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"/>
                    </svg>
                    <span className="material-input"/></div>
                <div className="form-group with-icon label-floating">
                    <label className="control-label">Your LinkedIn Account</label>
                    <input className="form-control" type="text" onChange={this.updateInputLinkedIn.bind(this)}/>
                    <svg className="svg-inline--fa fa-twitter fa-w-16 c-twitter" aria-hidden="true"
                         data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
                    </svg>
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
        );
    }
}

export default SetInformation;
