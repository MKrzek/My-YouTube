import React from 'react';
import VideoListItem from './video_list_item.jsx';

class VideoList extends React.Component {
    constructor(props){
        super (props);

    }
    render(){
        const videoItems =this.props.videos.map ((video)=>{
            return <VideoListItem 
            onVideoSelect={this.props.onVideoSelect}
            key={video.etag} 
            video={video} />
        })
        return <ul className='col-3'>
                {videoItems}
               </ul>  
    }
}

export default VideoList;