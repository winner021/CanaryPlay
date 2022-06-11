import React from 'react'
import "../styling/css/style.css"
import RecentlyPlayed from '../component/RecentlyPlayed'
import GenreListFour from '../component/GenreListFour'

const Black=()=>{
    return(
        <div className='Black_Container'>
            <h2>recommendation</h2>
            <div className='genre_Container'>
            <GenreListFour/>
            </div>
      
        </div>
    )
}

export default Black