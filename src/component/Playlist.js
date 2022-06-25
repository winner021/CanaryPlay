import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { PlaylistFetchAction } from '../actions'
import"../styling/css/style.css"
import { useHistory } from 'react-router-dom'
import { playlistTrackFetch } from '../actions'
import Message from '../helperPages/Message'
const Playlist=(props)=>{

    const history=useHistory()
    useEffect(()=>{
        if(props.token){
            props.PlaylistFetchAction(props.token)
        }
     
    },[props.token,props.state.playlistCreateReducer.data])

    const playListClickHandler=(id,name)=>{
       props.playlistTrackFetch(id,props.token,name)
       history.push("/playlistTracks")
    }
    console.log("i am rendering")

    const renderData=()=>{
        if( props.playlistData.data){
            return  props.playlistData.data.items.map((item)=>{
                
                return <li className='listItem' onClick={()=>playListClickHandler(item.id,item.name)}>
                {item.name}
                   </li>
            })
        }

   
    }
    return (
        <>
       
         <div className='Playlist'>
            <ul className="list_container">
                {props.playlistData?renderData():""}
            </ul>
        </div>
        </>
       
    )
}

const mapStateToProps=(state)=>{
    return{
      state:state,
      token:state.tokenId.data,
      playlistData:state.playlistFetch
    }
}


export default connect(mapStateToProps,{PlaylistFetchAction,playlistTrackFetch}) (Playlist)