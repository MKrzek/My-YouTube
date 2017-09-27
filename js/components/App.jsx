import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar.jsx';
import VideoList from './video_list.jsx';
import VideoDetail from './video_detail.jsx';
const API_KEY='AIzaSyD2s1Z20IgRRgCGWWd338PafSuW_26UITA';






class App extends React.Component {
    constructor (props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null,
        }
        this.videoSearch('Beyonce');
    }

    videoSearch (term){
        YTSearch({key:API_KEY, term: term}, (videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });


    })
    }
        render(){ 
            const videoSearch=_.debounce((term)=>{this.videoSearch(term)}, 300);
        return <div className='container'>
                  <div className='row'>
                <SearchBar  onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                  onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                  videos={this.state.videos}/>
                  </div>
                </div>;
        }
}


module.exports=App 