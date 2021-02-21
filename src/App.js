import React, {useState} from 'react';
import './App.css';
import VideoJson from './VideosJson';
import Player from './Player';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [videourl, setvideourl] = useState("");
  const [videoTittle, setTittle] = useState("");
  document.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.tagName === "IMG"){
         const getlink = VideoJson.find((link)=> link.thumbnell === e.target.src);
         setvideourl(getlink.url);
         setTittle(getlink.tittle);
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
    }else if(e.target.tagName === "P"){
      setvideourl(e.target.id);
         setTittle(e.target.id);
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
    }
    e.stopPropagation();
  })
  return (
    <div className="App">
   { videourl.length > 0 ? <Player url = {videourl} tittle = {videoTittle}/> : null}
      <div className = "row p-3">
      {
        VideoJson.map((video, index)=>{
          return <div key = {index} className = "col col-sm-3">
          <img src = {video.thumbnell} alt = "0000"/>
          <p id = {video.url}>{video.tittle}</p>
          </div>
        })
      }

      </div>
       
    </div>
  );
}

export default App;
