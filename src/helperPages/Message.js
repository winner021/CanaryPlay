import React from 'react'
import "../styling/css/style.css"

const Message=(props)=>{
    console.log(props.msg)
    console.log(props.style)
    
    return(
        <div className="message  ">
 <div className={`message_cont ${props.style} `}>
            <p>
          {props.msg}
            </p>
           
        </div>
        </div>
       
    )
}

export default Message