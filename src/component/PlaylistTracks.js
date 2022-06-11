import React from 'react'
import { connect } from 'react-redux'
import Sidebar from './Sidebar'
import"../styling/css/style.css"
import { playlistTrackdelete } from '../actions'
import { useState } from 'react'
import Message from '../helperPages/Message'
import { playlistTrackFetch } from '../actions'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { songClickAction } from '../actions'

 const PlaylistTrack=(props)=>{
    
    const history =useHistory()

    const [getmessage,setmessage]=useState(null)
    const [getMsgStyle,setMsgStyle]=useState("hide")

    console.log(props.state)
    const playClickHandler=(item)=>{
        const data={
           image:item.track.album.images[1].url,
           name:item.track.album.name,
           uri:item.track.album.uri,
           id:item.track.album.id,
           artistId:item.track.album.artists[0].id,
           artistname:item.track.album.artists[0].name,
           
       }
     props.songClickAction(data)
     history.push("/currentPlaying")
   }

    const playlistTrackdelete=(uri)=>{
          props.playlistTrackdelete(props.track.data.id,props.token.data,uri)
          setmessage("item deleted from playlist")
            setMsgStyle("show")
            setTimeout(clearmessage,1000)
            props.playlistTrackFetch(props.list.data.id,props.token.data,props.list.data.name)
    }
    const clearmessage=()=>{
        setMsgStyle("hide")
        setmessage("")
     }

     useEffect(()=>{
         if(props.track.data){
            dataRender()
         }
         
     },[props. deleteFlag.data])
     

    const dataRender=()=>{
        return props.track.data.items.map((item)=>{
            return <div className="content">
            <div className="img">
                <img src={item.track.album.images[1].url} alt="" />
            </div>

            <div className="buttons">
                <div className="btn_container">
                   <button className='play' onClick={()=>playClickHandler(item)}>
                            play
                   </button>
                   <button className='delete ' onClick={()=>playlistTrackdelete(item.track.uri)}>
                        delete
                   </button>
                </div>
            </div>
            <div className="trackName">
               {item.track.album.name}
            </div>
          
         </div>
        })
    }


    return(<>
   <Message msg={getmessage} style={getMsgStyle}/>
<div className='playListTrack'>
         <Sidebar/>
         <div className="name">
             playlist
        </div>
         <div className="playlist_track_container">
         <div className="banner">
                 {props.track.data?dataRender():<div className='error'>playlist is empty</div>}
         </div>
         </div>
        </div>
    </>
       
    )
}

const mapStateToProps=(state)=>{
  return{
      track:state.playLIstTrackData,
      list:state.playLIstTrackData,
      token:state.tokenId,
      deleteFlag:state.playlistdeletetrack
  }
}

export default connect(mapStateToProps,{playlistTrackdelete,playlistTrackFetch,songClickAction}) (PlaylistTrack)
