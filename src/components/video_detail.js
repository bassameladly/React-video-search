import React from 'react';

const VideoDetail = (props) => {
    const video = props.video;

    if(!video){
        return(<div className="video-list">Loading ...</div>)
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div>
            <div>
                <iframe src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}
export default VideoDetail;