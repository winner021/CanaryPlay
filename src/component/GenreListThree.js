import React from 'react'
import "../styling/css/style.css"
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { songClickAction } from '../actions'





const GenreListThree=(props)=>{
        
  const history =useHistory();
  const ClickReducer=(item)=>{
    const data={
       image:item.album.images[1].url,
       name:item.name,
       uri:item.uri,
       id:item.id,
       artistId:item.artists[0].id,
       artistname:item.artists[0].name
    }
 props.songClickAction(data)
 history.push("/currentPlaying")
}
   

     var num=0
       const renderdataThree=()=> {
               
      
           return   props.trackthree.map((item)=>{

            num=num+1;
          
             if(num<6){
               return<div className="category_item"  key={item.id} onClick={()=>ClickReducer(item)}>
                       
               <div className="img">
                        <img src={item.album.images[1].url} alt="" />
                  </div>
                  <div className="name">
                  {item.name}
                  </div>
                  <div className="about">
                    
                  </div>
               </div>   
             }
                      
               }) 
        
    

       } 

     


 
                
                

      
     
       
      
  

    return (
        <div>
         <div className='category'>
                <div className="selectedcategorry">
                    <div className="name">
                    {props.selectedgenre[2]}
                    </div>
                        
                </div>
         
            <div className="category_flex" style={{color:"white"}}>
            {props.trackthree?renderdataThree():"contents are loading"}
            </div>
         </div>
       
           
         
         </div>
         

       
    )
}
const mapStateToProps=(state)=>{
        return{
                token:state.tokenId.data,
                state:state,
                selectedgenre:state.selectedGenre.data,
                trackthree:state.trackThreeReducer.data,
           
               
        }
}

export default connect(mapStateToProps,{songClickAction}) (GenreListThree)