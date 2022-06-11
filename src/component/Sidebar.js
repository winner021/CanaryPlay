import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import"../styling/css/style.css"
import { connect } from 'react-redux'
import { playlistCreateAction } from '../actions'
import Playlist from './Playlist'

const Sidebar=(props)=>{


    const [getStyle,setStyle]=useState("hide")
    const [getText,setText]=useState(null)
    const [getBarStyle,setBarStyle]=useState("take")

    const playlistButtonHandler=()=>{
        if(getStyle==="hide"){
            setStyle("show")
        }
        else{
            setStyle("hide")
        }
      
    }

    const changehandler=(e)=>{
        setText(e.target.value)
    }
   
    const submitHandler=(e)=>{
        
       e.preventDefault()
        props.playlistCreateAction(props.userid.data.id,getText,props.token)
        setStyle("hide")
      
    }

    const cancelHandler=()=>{
        console.log("hello")
        if(getStyle==="hide"){
            setStyle("show")
        }
        else{
            setStyle("hide")
        }
       
    }

    const barClickHandler=()=>{
        if(getBarStyle==="take"){
            setBarStyle("give")
        }
        else{
            setBarStyle("take")
        }
        console.log(getBarStyle)
    }
 
    return(
        <div>
            
          <div className="leftContainer">
              
            <div className='btn_flex'>
            <div className="logo">
                 canary
             </div>
             <div className={`bar`}  onClick={()=>barClickHandler()}>
                  <i class="fa-solid fa-bars"></i>

             </div>
            
             <div className="btn">
                 <div className={`${getBarStyle}`}>


                 <div className="btn_container">
                    <div className="icon">
                    <i class="fas fa-search"></i>
                    </div>
                    <div className="text" >
                     <Link to="/search">Search</Link>
                    </div>
                </div>
                <div className="btn_container">
                    <div className="icon">
                    <i class="fa-solid fa-heart"></i>
                    </div>
                    <div className="text">
                    <Link to="/likedSongs">Liked Songs 
                    </Link>
                    </div>
                </div>
                
                <div className="btn_container">
                    <div className="icon">
                    <i class="fa-solid fa-align-justify"></i>
                    </div>
                    <div className="text playlist_btn">
                        <button  onClick={()=>playlistButtonHandler()}>
                       Create playlist
                        </button>
                       
                        <div className={`container ${getStyle}`}>
                        <div className="modal ">
                            
                            <div className="modal_container">
                                <div className="cancel">
                                <i class="fa-solid fa-arrow-left-long" onClick={()=>cancelHandler()}></i>
                                </div>
                                <h1>enter playlist name</h1>
                               <form onSubmit={(e)=>submitHandler(e)}>
                                   <input type="text" placeholder='Enter Playlist Name ' onChange={changehandler} />
                                   <button>Submit</button>
                               </form>
                            </div>
                         
                          
                        </div>
                        </div>
                      
                       
                    </div>
                </div>
                <div className="line">
                    
                    </div>
                    <div className="playlist ">
                        
                        <h3>your playlists</h3>
                    <Playlist/>
                       
                    </div>

                 </div>
             
            
             </div>
           
            </div>
    
              
              
                
               
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
      state:state,
      userid:state.UserDataReducer,
      token:state.tokenId.data,
    }
}

export default connect(mapStateToProps,{playlistCreateAction}) (Sidebar)