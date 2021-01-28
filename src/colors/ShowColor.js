import React from 'react'

function ShowColor(props){
    return (
       <div>
        <p>This is where the Color shows!</p>
        <p>{props.color}</p>
    </div> 
    )
    
}


export default ShowColor;