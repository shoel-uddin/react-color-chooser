import React from 'react'

function ColorRed(props){
    return (
        <div>
            <button className="red" value="red" onClick={(e) => props.getColor(e.target.value)}>
                Red
            </button>
        </div>
        
    )
}


export default ColorRed;