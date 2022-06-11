import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { SongSearchAction } from '../actions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { songClickAction } from '../actions'
import { useHistory } from 'react-router-dom'
import"../styling/css/style.css"
import Black from '../helperPages/Black'
import { artistFetchAction } from '../actions'


const Search=(props)=>{
    
    const[gettext,settext]=useState(null)
    const history =useHistory();
    useEffect(()=>{
     if(props.tracks){
            dataRender()
        }
       
    },[])
    
    const submitHandler=(e)=>{
        if(gettext){
            e.preventDefault()
            props.SongSearchAction(gettext,props.token)
        }
      
        
    }
    const changeHandler=(e)=>{
       settext(e.target.value)
    }

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






const dataRender=()=>{
   
        return props.tracks.tracks.items.map((item)=>{
            return <div className="item_container" onClick={()=>ClickReducer(item)}>
            <div className="about">
            <div className="image">
           <img src={item.album.images[1].url} />
            </div>
            <div className="name">
                   {item.name}
            </div>
            </div>
            
          
                <div className="duration">
                   
                </div>
         </div>
         })
    

}
console.log(props.state)

    return(
        <div className='Search'>
            <div className="side">
             <Sidebar/>
            </div>
            <div className="top">
                <form onSubmit={submitHandler}>
                <input type="text" placeholder='Search for songs,artist,albums' onChange={changeHandler} />
                </form>
              
            </div>
            <div className="gradient">
               <h1>
                   Search
               </h1>
            </div>
            <div className="main">
              {props.tracks?dataRender():<Black/>}
            </div>
           
        </div>
    )
}

const mapStateTOProps=(state)=>{
   
        return{
            state:state,
            token:state.tokenId.data,
            tracks:state.SearchReducer.data
        }
    
    
}


export default connect(mapStateTOProps,{SongSearchAction,songClickAction,artistFetchAction}) (Search)