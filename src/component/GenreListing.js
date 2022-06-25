import React from 'react'
import "../styling/css/style.css"
import { connect } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import RecentlyPlayed from './RecentlyPlayed'


import { finalTracksOne } from '../actions'
import { finalTracksTwo } from '../actions'
import { finalTracksThree } from '../actions'



import GenreListone from './GenreListone'
import GenreListThree from './GenreListThree'
import GenreListtwo from './genreListtwo'



const GenreListing=(props)=>{
  

        useEffect(()=>{
                renderTwo()
                renderOne()
                renderthree()
              
        },[props.selectedgenre])

        const renderTwo = async()=>{

            
                if(props.items){
       
                    const data=await axios.get("https://api.spotify.com/v1/recommendations",{
                            headers:{
                                    Authorization: `Bearer ${props.token}`  
                                },
                            params:{
                                    seed_genres:props.selectedgenre[1],
                            }
                        })
            
                        const tracksArr=[];
                        if(data.data.tracks){
                            data.data.tracks.map((item)=>{
                                    tracksArr.push(item.id) 
                              
                            })
                           
                        }
                      
                       
                       props.finalTracksTwo(tracksArr,props.token)
                      
                   
                    }
               
               
    
           } 
           
           console.log("i am rendering")

           const renderOne = async()=>{

               
                if(props.items){
              
                    const data=await axios.get("https://api.spotify.com/v1/recommendations",{
                            headers:{
                                    Authorization: `Bearer ${props.token}`  
                                },
                            params:{
                                    seed_genres:props.selectedgenre[0],
                            }
                        })
         
                        const tracksArr=[];
                        if(data.data.tracks){
                            data.data.tracks.map((item)=>{
                                    tracksArr.push(item.id) 
                              
                            })
                           
                        }
                    
                       
                       props.finalTracksOne(tracksArr,props.token)
                      
                   
                    }
               
               
    
           }
           const renderthree = async()=>{

        
                if(props.items){
          
                    const data=await axios.get("https://api.spotify.com/v1/recommendations",{
                            headers:{
                                    Authorization: `Bearer ${props.token}`  
                                },
                            params:{
                                    seed_genres:props.selectedgenre[2],
                            }
                        })
                   
                        const tracksArr=[];
                        if(data.data.tracks){
                            data.data.tracks.map((item)=>{
                                    tracksArr.push(item.id) 
                              
                            })
                           
                        }
                             
                       props.finalTracksThree(tracksArr,props.token)
                      
                   
                    }
               
               
    
           }
         
          
        
        
       
  return (
        <div className='genre_Container'>
            < RecentlyPlayed/>
           <GenreListone/>
           <GenreListtwo/>
           <GenreListThree/>
           
           
        </div>
    )
}
const mapStateToProps=(state)=>{
        return{
                token:state.tokenId.data,
                state:state,
                selectedgenre:state.selectedGenre.data,
                trackone:state.trackOneReducer.data,
                tracktwo:state.trackTwoReducer.data,
                tracks:state.SearchReducer.data,
                recently:state.RecentlyPlayedReducer,
               
        }
}

export default connect(mapStateToProps,{finalTracksOne,finalTracksTwo,finalTracksThree,finalTracksfour,finalTracksFive}) (GenreListing)