import axios from "axios"

export const tokenaction=(data)=>{

     return{
         type:"token",
         payload:data,
        }
}

export const genreaction=(data)=>{
    console.log("genreaction")
    return{
        type:"genre",
        payload:data,
    }
}

export const selectGenres=(data)=>{
  
    return{
        type:"selectedgenre",
        payload:data,
    }
}

export const finalTracksOne=(data,id)=>{
     

   
        return async (dispatch)=>{
          const arr=[]
            for(let i=0;i<20;i++)
            {
                const response=await axios.get(`https://api.spotify.com/v1/tracks/${data[i]}`,{
                headers:{
                    Authorization: `Bearer ${id}`  
                }
            })
          
            arr.push(response.data)
            }
            dispatch({type:"finalTracksone",payload:arr})
        }

        
    
}
export const finalTracksTwo=(data,id)=>{
     
console.log(data)
   
    return async (dispatch)=>{
      const arr=[]
        for(let i=0;i<20;i++)
        {
            const response=await axios.get(`https://api.spotify.com/v1/tracks/${data[i]}`,{
            headers:{
                Authorization: `Bearer ${id}`  
            }
        })
      
        arr.push(response.data)
        }
        dispatch({type:"finalTrackstwo",payload:arr})
    }

    

}
export const finalTracksThree=(data,id)=>{
     

   
    return async (dispatch)=>{
      const arr=[]
        for(let i=0;i<20;i++)
        {
            const response=await axios.get(`https://api.spotify.com/v1/tracks/${data[i]}`,{
            headers:{
                Authorization: `Bearer ${id}`  
            }
        })
      
        arr.push(response.data)
        }
        dispatch({type:"finalTracksthree",payload:arr})
    }

    

}
export const finalTracksfour=(data,id)=>{
    
   
    return async (dispatch)=>{
      const arr=[]
        for(let i=0;i<20;i++)
        {
            const response=await axios.get(`https://api.spotify.com/v1/tracks/${data[i]}`,{
            headers:{
                Authorization: `Bearer ${id}`  
            }
        })
      
        arr.push(response.data)
        }
        dispatch({type:"finalTracksfour",payload:arr})
    }

    

}
export const finalTracksFive=(data,id)=>{
     

   
    return async (dispatch)=>{
      const arr=[]
        for(let i=0;i<20;i++)
        {
            const response=await axios.get(`https://api.spotify.com/v1/tracks/${data[i]}`,{
            headers:{
                Authorization: `Bearer ${id}`  
            }
        })
      
        arr.push(response.data)
        }
        dispatch({type:"finalTracksfive",payload:arr})
    }

    

}
export const finalTracksSix=(data,id)=>{
     

   
    return async (dispatch)=>{
      const arr=[]
        for(let i=0;i<20;i++)
        {
            const response=await axios.get(`https://api.spotify.com/v1/tracks/${data[i]}`,{
            headers:{
                Authorization: `Bearer ${id}`  
            }
        })
      
        arr.push(response.data)
        }
        dispatch({type:"finalTrackssix",payload:arr})
    }

    

}

export const songClickAction=(data)=>{
     
    return{
        type:"sonClick",
        payload:data,
             
}
 
    
}

export const SongSearchAction=(data,id)=>{
    return async(dispatch)=>{
        const response=await axios.get("https://api.spotify.com/v1/search",{
            headers:{
                Authorization: `Bearer ${id}`  
            },
            params:{
                q:data,
                 type:"track,artist,album"
            }
        })
        dispatch({type:"searchedsongs",payload:response.data})
    }
}

export const likedDataPut=(id,trackId)=>{
    return async(dispatch)=>{
        console.log(id)
        console.log(trackId)
      const response=await axios.put(`https://api.spotify.com/v1/me/tracks`,{"ids":[`${trackId}`]},{
        headers:{
            Authorization: `Bearer ${id}`  
        },
        params:{
            ids:`${trackId}`
        }
      })   
      
    }
    
}
export const likedDataFetch=(id)=>{
console.log(id)
    return async(dispatch)=>{
      const response=await axios.get(`https://api.spotify.com/v1/me/tracks`,{
        headers:{
            Authorization: `Bearer ${id}`  
        },
        params:{
            market:"IN"
        }
      })   
     dispatch({type:"userLikedSongs",payload:response.data})
    
    }
    
}
export const RecentlyPlayedAction=(id)=>{
    return async (dispatch)=>{
        const response= await axios.get("https://api.spotify.com/v1/me/player/recently-played",{
            headers:{
                Authorization: `Bearer ${id}`  
            },
        })
       dispatch({type:"recentlyPlayed",payload:response.data})
    }
    
}
export const playlistCreateAction=(userid,data,id)=>{
    return async (dispatch)=>{
        const response= await axios.post(`https://api.spotify.com/v1/users/${userid}/playlists`,{name:data},{
            headers:{
                Authorization: `Bearer ${id}`  
            },
        })
        dispatch({type:"playlistCreate",payload:response.data})
        
        
    }
}

export const PlaylistFetchAction=(id)=>{
 return async(dispatch)=>{
     const response=await axios.get("https://api.spotify.com/v1/me/playlists",{
        headers:{
            Authorization: `Bearer ${id}`  
        }
     })
     dispatch({type:"playlistFetch",payload:response.data})
    
 }
}




export const userDataFetchAction=(id)=>{
    return async (dispatch)=>{
        const response= await axios.get("https://api.spotify.com/v1/me",{
            headers:{
                Authorization: `Bearer ${id}`  
            },
        })
        dispatch({type:"userDatas",payload:response.data})
    }


}


export const playlistTrackAdd=(playlistid,tokenid,trackuri)=>{
    return async(dispatch)=>{
        
        const response= await axios.post(`https://api.spotify.com/v1/playlists/${playlistid}/tracks`,{"uris":[`${trackuri}`]},{
            headers:{
                Authorization: `Bearer ${tokenid}`  
            },
            params:{
                uris:`${trackuri}`
            }  
            
        })
        console.log(response.data)
    }
}

export const artistFetchAction=(id,token)=>{
         return async (dispatch)=>{
             const response=await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks`,{
                headers:{
                    Authorization: `Bearer ${token}`  
                },
                params:{
                    market:"IN"
                }
             })
             dispatch({type:"artistTrack",payload:response.data})
         }
         
    }

    export const playlistTrackFetch=(id,token,name)=>{
        return async (dispatch)=>{
            const response=await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`,{
                headers:{
                    Authorization: `Bearer ${token}`  
                }
            })
            dispatch({type:"playlistTrackData",payload:{...response.data,name:name,id:id}})
        }
    }

    export const playlistTrackdelete=(id,token,uri)=>{
        console.log(id)
        console.log(token)
        console.log(uri)
        return async (dispatch)=>{
            var num=0;
            const response=await axios.delete(`https://api.spotify.com/v1/playlists/${id}/tracks`,{
               
                headers:{
                    Authorization: `Bearer ${token}`  
                },
                data:{
                    "tracks":[{"uri":`${uri}`}]
                }
                
            })
            console.log(response.data)
            dispatch({type:"playlistDeleteTrack",payload:num+1})
            
        }
    }
  
   
    
    export const likedSongDeleteAction=(token,songId)=>{
        console.log(token)
        console.log(songId)
        return async (dispatch)=>{
            var num=0
            const response=await axios.delete(`https://api.spotify.com/v1/me/tracks`,{
                headers:{
                    Authorization: `Bearer ${token}`  
                },
                params:{
                    ids:`${songId}`
                }
            })

            dispatch({type:"likedSongDelete",payload:num+1})
        }
        
    }