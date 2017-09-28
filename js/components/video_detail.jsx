import React from 'react';

class VideoDetail extends React.Component{
constructor (props){
    super (props);
}
render (){
    
    const video= this.props.video;
    if (!video){
        return <div>Loading ...</div>
    }
    const videoId=video.id.videoId;
    const url='https://www.youtube.com/embed/' + videoId;
    return <div className='col-9 video-detail' >
            <div>
                <iframe className='col-9 video-img' src={url}></iframe>
            </div>
            <div>
            <div className='col-9 main-video-info title-info'>{video.snippet.title}</div>
            <div className='col-9 main-video-info description-info'>{video.snippet.description}</div>
            </div>
            </div>
            
}
}
export default VideoDetail;