import React, {Component} from 'react';

class SinglePhoto extends Component {
    render() {
        return (

                <div className="photo-album-item-wrap col-4-width">


                    <div className="photo-album-item" data-mh="album-item"
                         style={{height: '200.891px'}}>
                        <div className="photo-item">
                            <img style={{width:'306.5px' ,height:'262.17px'}} src={this.props.photo} alt="profile"/>
                            <div className="overlay overlay-dark"/>
                            <a href="#" className="more">
                                <svg className="olymp-three-dots-icon">
                                    <use xlinkHref="#olymp-three-dots-icon"/>
                                </svg>
                            </a>
                            <a href="#" className="post-add-icon">
                                <svg className="olymp-heart-icon">
                                    <use xlinkHref="#olymp-heart-icon"/>
                                </svg>

                            </a>
                            <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2"
                               className="  full-block"/>
                        </div>






                </div>
            </div>
        );
    }
}

export default SinglePhoto;
