import React, {Component, setState} from "react";

export default class recUser extends Component {
    constructor(){
        super()

    }

    render() {
        const user = this.props.user;
        const {values, handleChange,disabledButton} = this.props;
        const bool=this.props.disabledButton(this.props.user._id)

        return (
            <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="ui-block">
                    <div className="birthday-item inline-items">
                        <div className="author-thumb">
                            <img src="/img/avatar7-sm.jpg" alt="author"/>
                        </div>
                        <div className="birthday-author-name">
                            <a href="#" className="h6 author-name">{user.firstname} {user.lastname}</a>
                            <div className="birthday-date">{user.email} </div>
                        </div>
                        <div className="row" style={{float:"right"}}>
                            <button id={user._id} hidden={bool} onClick={handleChange('members')} className="accept-request" value={user._id}>
												<span className="icon-add">
													<svg className="olymp-happy-face-icon"><use
                                                        xlinkHref="#olymp-happy-face-icon"></use></svg>
												</span>
                                send request
                            </button>
                            <button id={"del"+user._id} onClick={handleChange('delMember')} hidden={!bool} className="accept-request request-del"
                                    value={user._id}>

												<span className="icon-minus">
													<svg className="olymp-happy-face-icon"><use
                                                        xlinkHref="#olymp-happy-face-icon"></use></svg>
												</span>
                                delete request
                            </button></div>
                    </div>

                </div>
            </div>
        );
    }
}
