import React, {Component} from 'react';

class LastPhotos extends Component {
    render() {
        const photo = this.props.photo;
        return (
            <li>
                <a href={photo}>
                    <img src={photo}  style={{width:'78.33px'}} alt="photo"/>
                </a>
            </li>
        );
    }
}

export default LastPhotos;
