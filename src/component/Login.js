import React from 'react'
import { useEffect } from 'react'
import "../styling/css/style.css"

const Login=()=>{

    const clearStorage=()=>{
        localStorage.clear("persist:root")
        console.log("hello")
    }

    clearStorage()
     
   
    const CLIENT_ID="e48a715ed42a474db5a26a2697d7ebce"
    const AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE="token"
    const REDIRECT_URI="https://thecanarysongs.netlify.app/home"

    
    return (
        <div className='Login'>
           <div className="Login_container">
               <div className="logo">
                   
               </div>
    
           <div className="Brand_name">
                 canary
            </div>
            <div className="Login_featured">
               powered by spotify
            </div>
            <div className="Login_about">
                let the music speak
            </div>
            <div className="login_btn">
             <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=streaming%20ugc-image-upload%20user-modify-playback-state%20user-follow-modify%20user-read-recently-played%20user-read-playback-position%20playlist-read-collaborative%20app-remote-control%20user-read-playback-state%20user-read-email%20user-top-read%20playlist-modify-public%20user-library-modify%20user-follow-read%20user-read-currently-playing%20playlist-read-private%20user-read-private%20user-read-playback-state%20playlist-modify-private%20user-library-read`}>Login</a> 
            </div>
           </div>
           
        </div>
    )
}

export default Login