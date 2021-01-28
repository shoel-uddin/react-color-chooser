import React from 'react'

function ColorBlue(props){
    return (
        <div>
            <button className='blue' value="Blue" onClick={((e) => props.getColor(e.target.value))}>
                Blue
        </button>
        </div>
        
    )
}

export default ColorBlue;