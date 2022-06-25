import React from 'react'
import "../styling/css/style.css"

const Message=(props)=>{

    
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