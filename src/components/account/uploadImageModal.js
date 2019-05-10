import React, {Component} from 'react';
import axios from "axios";

class UploadImageModal extends Component {
    triggerInput = e => {
        this.props.triggerInput(e);
    };
    handleChange = e => {
        const data = new FormData();
        const file = e.target.files[0];
        data.append("image", file);
        axios({
            method: 'post',
            url: '/api/user/changeProfilImage',
            data: data,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        }).then(result => {
            this.props.handleChange(result.data.message.profileImage);
        })
    }

    render() {
        return (
            <div>

                <div className="modal-header">
                    <h6 className="title">Update Header Photo</h6>
                </div>
                <div className="modal-body">
                    <a type="file" onClick={this.triggerInput.bind(this)} href="#" className="upload-photo-item">
                        <svg className="olymp-computer-icon">
                            <use xlinkHref="#olymp-computer-icon"></use>
                        </svg>

                        <h6>Upload Photo</h6>
                        <span>Browse your computer</span>
                        <input type="file" name="image" onChange={this.handleChange.bind(this)}
                               id="imageUpload" className="hide" style={{display: 'none'}}/>
                    </a>

                    <a href="#" className="upload-photo-item" data-toggle="modal"
                       data-target="#choose-from-my-photo">

                        <svg className="olymp-photos-icon">
                            <use xlinkHref="#olymp-photos-icon"></use>
                        </svg>

                        <h6>Choose from My Photos</h6>
                        <span>Choose from your uploaded photos</span>
                    </a>
                </div>
                        </div>

        );
    }
}

export default UploadImageModal;
