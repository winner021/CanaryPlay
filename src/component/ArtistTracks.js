import React from 'react'
import "../styling/css/style.css"
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import { songClickAction } from '../actions'
import { useHistory } from 'react-router-dom'

const ArtistTracks=(props)=>{

    const history =useHistory();



    const ClickReducer=(item)=>{
        const data={
           image:item.album.images[1].url,
           name:item.name,
           uri:item.uri,
           id:item.id,
           artistId:item.artists[0].id,
           artistname:item.artists[0].name,
           
       }
     props.songClickAction(data)
     history.push("/currentPlaying")
   }

const renderData=()=>{
 
    if(props.artist.data.tracks){
        
           return props.artist.data.tracks.map((item)=>{
            return   <div className="tracks" onClick={()=>ClickReducer(item)}>
            <div className="img">
               <img src={item.album.images[1].url} alt="" />
            </div>
            <div className="name">
             {item.album.name}
            </div>
  
        </div>
          })
        
        }

}

    return (
        <div className='Artist_track'>
            <Sidebar/>
            <div className="container">
                <div className="artistTrack_container">
              {renderData()}
                </div>
              
            </div>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
state:state,
artist:state.artistData
    }
}

export default connect(mapStateToProps,{songClickAction}) (ArtistTracks)



