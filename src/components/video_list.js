import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
return(
    <VideoListItem 
    key={video.etag} 
    video={video}
    userSelected={props.onVideoSelect}/>
)
    })
    return(
        <ul >
            {videoItems}
        </ul>
    )
}
 
export default VideoList;