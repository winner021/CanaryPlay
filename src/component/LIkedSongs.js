import React from 'react'
import { useEffect } from 'react'
import"../styling/css/style.css"
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'
import { likedDataFetch } from '../actions'
import { useHistory } from 'react-router-dom'
import { songClickAction } from '../actions'
import { likedSongDeleteAction } from '../actions'

const LikedSongs=(props)=>{

  useEffect(()=>{
    if(props.likedSongs){
      datarender()
    }
  },[props.state.data])
    
  const history=useHistory()
    useEffect(()=>{
        props.likedDataFetch(props.tokenId)  
    },[])

    const ClickReducer=(item)=>{
      const data={
         image:item.track.album.images[1].url,
         name:item.track.name,
         uri:item.track.uri,
         id:item.track.id,
         artistId:item.track.artists[0].id,
         artistname:item.track.artists[0].name,
         
      }
   props.songClickAction(data)
   history.push("/currentPlaying")
  }


   const deleteHandler=(id)=>{
    props.likedSongDeleteAction(props.tokenId,id)
   }



    
    const datarender=()=>{
        if(props.likedSongs.data){
            return props.likedSongs.data.items.map((item)=>{
                return   <div className="song_container">
                <div className="img">
           <img src={item.track.album.images[1].url} alt="" />
                </div>
   
                <div className="btn">
                  <div>
                  <button onClick={()=>deleteHandler(item.track.id)} >
                       Delete
                   </button>
                  </div>
                  <div>
                  <button onClick={()=>ClickReducer(item)}>
                       play
                   </button>
                  </div>
                  
                   
                </div>

                <div className="name">
            {item.track.album.name}
                </div>
               
            </div>
    
            })
        }
      

    }
    console.log(props.s)
    return(
        <div className='Liked_Songs'>
          <Sidebar/>
          <div className="songs_container">
              <div className="top">
               liked songs
              </div>
              <div className="body">
                {datarender()}
              </div>
          </div>
        </div>
    )
   
}

const mapStateToProps=(state)=>{
    return {
      likeSong:state.SongClickReducer.data,
      tokenId:state.tokenId.data,
      likedSongs:state.userLikedSongs,
      state:state.likedSongDelete,
      s:state
    }
 }
 

export default connect(mapStateToProps,{ likedDataFetch,songClickAction,likedSongDeleteAction}) (LikedSongs)
