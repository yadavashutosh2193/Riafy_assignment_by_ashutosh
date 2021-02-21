import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import VideoJson from './VideosJson';
import { FcShare } from "react-icons/fc";
import { BiLike, BiDislike } from "react-icons/bi";

// Render a YouTube video player
const Player = (props)=>{
    const videodetail = VideoJson.find(video=> video.url === props.url);
    const [counter, setcounter] = useState(0);
    const [Dcounter, setDecounter] = useState(0);
    useEffect(()=>{
        setcounter(0);
        setDecounter(0);
    }, [props.url])

     return (<>
     <div className = "container-fluid p-3 justify-content-end border shadow">
     <div className = "row p-3">
         <div className = "col col-sm-6">
         <div className = "row">
         <ReactPlayer url= {props.url} controls style = {{alignSelf: 'center'}} playing = {true}/>
        </div>
        <div className = "row">
            <p>{props.tittle}</p>
        </div>
        <div className = "row justify-content-end m-3">
             <button className = "btn ml-3 border border-info"><FcShare/></button>
             <button className = "btn ml-3 border border-info" onClick = {()=>setcounter(counter + 1)}>{counter} <BiLike/></button>
             <button className = "btn ml-3 border border-info" onClick = {()=>setDecounter(Dcounter + 1)}>{Dcounter} <BiDislike/></button>
         </div>
         </div>
         <div className = "col" style = {{maxHeight: 360 + 'px', overflow: 'scroll'}}>
         
           {
               VideoJson.map((link, index)=>{
                   return <div className = "row border" key = {index}>
                           {
                            link.type === videodetail.type ? <>
                            <div className = "col col-sm-3">
                            <img src = {link.thumbnell} alt = "00000" style = {{width: 100 + 'px'}}/>
                            </div>
                            <div className = "col justify-content-start">
                                <p id = {link.url}>{link.tittle}</p>
                            </div>
                            
                          </> : null}
                   </div>
               })
           }
         
         </div>
     </div>
     </div>
     </>)
}

export default Player;
