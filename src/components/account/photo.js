import React, {Component} from 'react';
import SinglePhoto from './singlePhoto';

class Photo extends Component {


    render() {
        let interfaceSingleImage;
        let interfaceProfileImage;
        interfaceSingleImage = this.props.profile.oldPhoto.map(photo =>
            <SinglePhoto key={photo.toString()} photo={photo}/>
        )
        if (this.props.profileImage !== 'https://res.cloudinary.com/pi-dev/image/upload/v1555884886/bjce0bnez3w7oqbykqre.png') {
            interfaceProfileImage =
                <SinglePhoto key={this.props.profile.profileImage.toString()} photo={this.props.profile.profileImage}/>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                        <div className="tab-content">
                            <div className="tab-pane" id="photo-page" role="tabpanel">

                                <div className="photo-album-wrapper">


                                    <div className="photo-item half-width">
                                        <img src="img/photo-item1.jpg" alt="photo"/>
                                        <div className="overlay overlay-dark"></div>
                                        <a href="#" className="more">
                                            <svg className="olymp-three-dots-icon">
                                                <use xlinkHref="#olymp-three-dots-icon"></use>
                                            </svg>
                                        </a>
                                        <a href="#" className="post-add-icon inline-items">
                                            <svg className="olymp-heart-icon">
                                                <use xlinkHref="#olymp-heart-icon"></use>
                                            </svg>
                                            <span>15</span>
                                        </a>
                                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1"
                                           className="  full-block"></a>
                                        <div className="content">
                                            <a href="#" className="h6 title">Header Photos</a>
                                            <time className="published" dateTime="2017-03-24T18:18">1 week ago
                                            </time>
                                        </div>
                                    </div>


                                    <a href="#" className="btn btn-control btn-more">
                                        <svg className="olymp-three-dots-icon">
                                            <use xlinkHref="#olymp-three-dots-icon"/>
                                        </svg>
                                    </a>

                                </div>

                            </div>

                            <div className="tab-pane active" id="album-page" role="tabpanel">

                                <div className="photo-album-wrapper">

                                    {interfaceProfileImage}
                                    {interfaceSingleImage}


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Photo;
