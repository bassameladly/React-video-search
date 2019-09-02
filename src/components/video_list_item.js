import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;

    const imageUrl = video.snippet.thumbnails.default.url;
    return(
        <li onClick={() => props.userSelected(video)}>
            <div >
                <div>
                    <img  src={imageUrl} alt=''/>
                    </div>
                    <div>
                        <div className='video-list-title'>{video.snippet.title}</div>
                    
                </div>
            </div>
        </li>

    )
}

export default VideoListItem;