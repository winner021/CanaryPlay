import React from 'react'
import {BrowserRouter,Route} from "react-router-dom"
import Login from './component/Login'
import Home from './component/Home'
import Search from './component/Search'
import CurrentPlaying from './component/CurrentPlaying'
import LikedSongs from './component/LIkedSongs'
import ArtistTracks from './component/ArtistTracks'
import PlaylistTracks from './component/PlaylistTracks'
import { connect } from 'react-redux'


const App=(props)=>{
    console.log(props.state)
    return(
        <BrowserRouter>
    <Route path="/" exact component={Login}/>
    <Route path="/home" component={Home}/>
    <Route path="/search" component={Search}/>
    <Route path="/currentPlaying" exact component={CurrentPlaying}/>
    <Route path="/likedSongs" exact component={LikedSongs}/>
    <Route path="/artisttracks" exact component={ArtistTracks}/>
    <Route path="/playlistTracks" exact component={PlaylistTracks}/>
    
   </BrowserRouter>
    )
   
}


export default App