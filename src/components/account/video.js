import React, {Component} from 'react';
import dotenv from 'dotenv';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
//import './video.css';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import {Icon, notification} from 'antd';

const API_KEY = "AIzaSyAHDn5cgoUR2grlV8JGnEGJmNBSAllnvLs";

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            search: true,
            selectedVideo: {}
        };

    }

    videoSearch(term) {
        if (this.state.search) {
            YTSearch({key: API_KEY, term}, (data) => {
                try {
                    if (data && data.data && data.data.error.message) {
                        console.log(data);
                        throw ('error')
                    }
                    this.setState({videos: data, selectedVideo: data[0]});
                    console.log(this.state.videos);
                } catch (err) {

                }

            });
        }

    }

    handleChange = (value) => {
        setTimeout(() => {
            if (value === '') {
                this.setState({videos: [], selectedVideo: null});
                return;
            }

            if (this.state.search) {
                this.videoSearch(value);
            }

            setTimeout(() => {
                this.setState({search: true});
            }, 5000);

        }, 2000);

    };


    render() {
        return (

            <div className="col col-xl-10 m-auto col-lg-10 col-md-12 col-sm-12 col-12">
                <link rel="stylesheet" href="video.css" />


            <div style={{ "display": "flex", "flexDirection": "column"  }}>
                <div style={{ "display": "flex", "justifyContent": "space-between", "background": "#F46036"}}>
                    <h1 style={{ "color": "#fff", "alignSelf": "center", "flexBasis": "4", "paddingTop": "20px", "paddingLeft": "30px" }}>IderTube <Icon type={"search"}/></h1>
                    <SearchBar videos={ this.state.videos } video={ this.state.selectedVideo } onChange={ this.handleChange } handleSearch={ (video) => { this.setState({ selectedVideo: this.state.videos[video], search: false })}}/>
                </div>
                <div style={{ "display" : "flex" }}>
                    <VideoDetail video={ this.state.selectedVideo }/>
                    <VideoList
                        videos={ this.state.videos }
                        onVideoSelect={ ( userSelected ) => { this.setState({ selectedVideo: this.state.videos[ userSelected ] }) }}
                    />
                </div>
            </div>
            </div>
        );
    }
}

export default Video;
