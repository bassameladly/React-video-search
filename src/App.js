import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import "bootstrap/dist/css/bootstrap.css"

const API_KEY = 'AIzaSyBQttv28WSJ-EIxcI114hbbGUpVaGT6GY0';

class App extends Component {
  state = { 
    videos: [],
    selectedVideo: null
   }

   videoSearch(searchTerm) {
     YTSearch({ key: API_KEY, term: searchTerm}, (data) => {
       this.setState({
         videos: data,
         selectedVideo: data[0]
       })
     })
   }

 
  render() { 
    return ( 
      <div className="m-2  text-center ">
        <h1 className="text-secondary">Search Here From youtube</h1>
        <div className="p-3 mb-2 bg-info text-white "><SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/></div>
        <div className="m-2 border border primary text-left "><VideoList 
        videos={this.state.videos}
        onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected})}
         /> 
         <VideoDetail video={this.state.selectedVideo}/>
         </div>

      </div>
     );
  }
}
 
export default App;