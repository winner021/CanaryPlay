import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { userDataFetchAction } from '../actions'

const AboutUser=(props)=>{
 console.log(props.state)
 useEffect(()=>{
     if(props.token){
        props.userDataFetchAction(props.token)
     }
  
 },[props.token])
    return(
        <span>
           {props.username.data!= null? props.username.data.display_name:""}
        </span>
    )
}

const mapStateToProps=(state)=>{
    return{
       state:state,
       token:state.tokenId.data,
       username:state.UserDataReducer
    }
}


export default connect(mapStateToProps,{userDataFetchAction}) (AboutUser)