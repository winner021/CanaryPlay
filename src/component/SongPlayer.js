import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { connect } from 'react-redux'

const SongPlayer=(props)=>{

    return<SpotifyPlayer 
    styles={{
        activeColor: '#fff',
        bgColor: '#000000',
        color: '#E757EC',
        loaderColor: '#fff',
        sliderColor: '#E757EC',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
    token={`${props.token}`}
    uris={[`${props.uri}`]}
  />    
    
}
const mapStateToProps=(state)=>{
    return{
        state:state,
        token:state.tokenId.data
    }
}
export default connect(mapStateToProps) (SongPlayer)
