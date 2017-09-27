import React from 'react';
class VideoListItem extends React.Component{
    constructor (props){
        super (props);
    }
    render(){
        const video= this.props.video;
        const onVideoSelect=this.props.onVideoSelect;
        const imageUrl=video.snippet.thumbnails.default.url;
        console.log (video);
        return <li onClick={()=>onVideoSelect(video)} className='col-12 individual-video'>
               <div className>
                   <div className>
                   <img className='col-11 info' src={imageUrl} />
               </div>
               <div className>
                   <div className>{video.snippet.title}</div>
               </div>
               </div>
               </li>
    }
}
export default VideoListItem;