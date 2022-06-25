import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import"../styling/css/style.css"
import Sidebar from './Sidebar' 
import { connect } from 'react-redux'
import { tokenaction } from '../actions'
import GenreListing from './GenreListing'
import { genreaction } from '../actions'
import { selectGenres } from '../actions'
import SongPlayer from './SongPlayer'
import AboutUser from './AboutUser'
import { userDataFetchAction } from '../actions'
import Hero from './Hero'
import { SongSearchAction } from '../actions'


const Home=(props)=>{
const[getgenere,setgenere]=useState(null)
const [getItem,setItem]=useState(null)
const[getselectedsong,setselectedsong]=useState(null)
useEffect(()=>{
    var token= window.location.hash
    var arr=token.split("&")
    token=arr[0]
    token=token.substring(1)
    var arr2=token.split("=")
    token=arr2[1]; 
    props.tokenaction(token)
},[])
    
    
  
 

    useEffect(()=>{
        if(props.clickedsong){
            setselectedsong(props.clickedsong.preview_url)
        }
       
       
    },[props.clickedsong])

useEffect(()=>{
    if(props.token.data){
        const data=async()=>{
            const response= await  axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds",{
                headers:{
                    Authorization:`Bearer ${props.token.data}`  
                },
              
            })
               
                props.genreaction(response.data)
                setgenere(response.data.genres)
                
               
          }
          data();
    }
    
    
},[props.token.data])

const genrearr=[]
useEffect(()=>{
    if(getgenere){
        for(let i=0;i<7;i++){
            var num=Math.floor(Math.random() * 40)
            genrearr.push(getgenere[num])
            
            
        }
        props.selectGenres(genrearr)
        setItem(genrearr)
       
    }
   
},[getgenere])

console.log("i am rendering")





    return(
       <div className='Home'>
                <div className="Home_container">
                         <Sidebar/>
                    <div className="rightContainer">
                       <div className="banner">
                          <Hero/>
                       </div>
                      <div className="userName">
                       <i class="fa fa-user" aria-hidden="true"></i>
                      
                       <span>
                       <AboutUser/>
                       </span>
                       </div>
                        {props.selectedgenre?<GenreListing items={getItem}/>:"loading"}   
                   </div>
              </div>  

        </div>
        
    )
    
}

const mapStateToProps=(state)=>{
  return{
      genreData:state.genres.data,
      selectedgenre:state.selectedGenre.data,
      clickedsong:state.SongClickReducer.data,
      state:state.tokenId.data,
      state:state,
      token:state.tokenId,
}
}

export default connect(mapStateToProps,{tokenaction,genreaction,selectGenres,userDataFetchAction,SongSearchAction}) (Home)