import React from 'react'

function ColorGreen(props){
    return (
        <div>
            <button className='green' value="Green" onClick={(e) => props.getColor(e.target.value)}>
                Green
            </button>
        </div>
        
    )
}

export default ColorGreen;