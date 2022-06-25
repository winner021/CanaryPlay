import React from 'react'
import"../styling/css/style.css"
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'
import { playlistTrackAdd } from '../actions'
import video from "../asset/video/video.mp4"
import GenreListone from './GenreListone'
import { useEffect } from 'react'
import { artistFetchAction } from '../actions'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Message from '../helperPages/Message'
import { likedDataPut } from '../actions'
import SongPlayer from './SongPlayer'

const CurrentPlaying=(props)=>{
   
    useEffect(()=>{
    props.artistFetchAction(props.SelectedTrack.artistId,props.token)
    },[])



    const [getStyle,setStyle]=useState("hide")
    const [getmessage,setmessage]=useState(null)
    const [getMsgStyle,setMsgStyle]=useState("hide")
   
     const renderData=()=>{
         return   <div className="about">
         <div className="img">
             <img src={props.SelectedTrack.image} alt="" />
         </div>
         <div className="name">
         {props.SelectedTrack.name}
         <div className="artist" >
             <Link to="/artisttracks">
             { `listen more by ${props.SelectedTrack.artistname}`}
             </Link>
       
         </div>
         </div>
       </div>
     }
    
      

       const artistClickHandler=()=>{

       }


     const playlistSelectHandler=(playlistid)=>{
         
         if(props.token){
            
            props.playlistTrackAdd(playlistid,props.token,props.SelectedTrack.uri)
            setStyle("hide")
            setmessage("item added to playlist")
            setMsgStyle("show")
           
            setTimeout(clearmessage,1000)
            
         }
          
     }
     const clearmessage=()=>{
        setMsgStyle("hide")
        setmessage("")
     }


     const clickAction= async (id)=>{
        props.likedDataPut(props.token,id)
     }

    const renderplaylist=()=>{
        if(props.playlistitems.data){
            return props.playlistitems.data.items.map((item)=>{
                return <li className="item" onClick={()=>playlistSelectHandler(item.id)}>
               {item.name}
            </li>
       },[])
        }
       
    }

   

    const playlistAddHandler=()=>{
        
       if(getStyle=="hide"){
        setStyle("show")
       }
       else{
        setStyle("hide")
       }

    }
    const cancelHandler=()=>{
        if(getStyle=="hide"){
            setStyle("show")
           }
           else{
            setStyle("hide")
           }
        
    }



    return(
        <>
         
<div className='trackContainer'>
            <Message msg={getmessage} style={getMsgStyle}/>
            <Sidebar/>
               <video autoPlay muted loop className="myVideo">
                       <source src={video} type="video/mp4"/>
              </video>
              <div className="content">
              <div className="banner">
            <div className='Hero'>
              <div className="hero_container">
                  <h2>
                  Current playing
                  </h2>
              </div>
          </div>
            </div>
              <div className="heading">
              
              </div>
  
               {props.SelectedTrack?renderData():""}          
           
              <div className="btn">
               <div className="like">
                   <div className="like_icon">
                   <i class="fa-solid fa-heart"></i>
                   </div>
                   <div className="like_name">
                   <button onClick={()=>clickAction(props.SelectedTrack.id)}>
                       Like
                   </button>
  
                   </div>
                
               </div>
               <div className="like">
                   <div className="like_icon">
                   <i class="fa-solid fa-bars"></i>
  
  
                   </div>
                   <div className="like_name">
                   <button onClick={()=>playlistAddHandler()}>
                     add to  Playlist
                   </button>
                   
                   </div>
                
               </div>
              
              </div>
              <div className="display">
              <div className={`modal ${getStyle}`} >
                 <div className="container ">
                     <h2>
                     playlist
                     </h2>
                     <span className='cancel' onClick={()=>cancelHandler()}>
                     <i class="fa-solid fa-x"></i>
                     </span>
                     <h3>
                         select playlist to add
                     </h3>
                
                 <div className="playlistnames">
                 <ul className='listItem'>
                        {renderplaylist()}
                 </ul>
                 </div>
              
                 </div>
                 
             </div>
              </div>
              <div className="Song_Player">
              <SongPlayer uri={props.SelectedTrack.uri}/>
              </div>
            
              </div>
             
          </div>
        </>
       
    )
}

const mapStateToProps=(state)=>{
    return{
        SelectedTrack:state.SongClickReducer.data,
        token:state.tokenId.data,
        playlistitems:state.playlistFetch,
        artist:state.SongClickReducer,
        artist:state.artistData,
        state:state,

    }
}

export default connect(mapStateToProps,{playlistTrackAdd,artistFetchAction,likedDataPut}) (CurrentPlaying)