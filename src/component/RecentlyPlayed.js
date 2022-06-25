import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { RecentlyPlayedAction } from '../actions'

const RecentlyPlayed=(props)=>{
  useEffect(()=>{
      props.RecentlyPlayedAction(props.token)
  },[])
  const renderdata=()=> {
      if(props.track.data){
        return  props.track.data.items.map((item)=>{
     
            return<div className="category_item" key={item.track.album.id}>
                    
            <div className="img">
                     <img src={item.track.album.images[1].url} alt="" />
               </div>
               <div className="name">
               {item.track.name}
               </div>
               <div className="about">
                 
               </div>
            </div>   
          }
                   
            ) 
      }
    
   
 


} 
console.log("i am rendering")

    return(
       <div>
        <div className='category'>
               <div className="selectedcategorry">
                   <div className="name">
                   Recently played
                   </div>
                       
               </div>
        
           <div className="category_flex">
            {props.track?renderdata():""}
           </div>
        </div>
      
          
        
        </div>
    )
}

const mapStateToProps=(state)=>{
 return {
    state:state,
    token:state.tokenId.data,
    track:state.RecentlyPlayedReducer
 }
    }

export default connect(mapStateToProps,{RecentlyPlayedAction}) (RecentlyPlayed)