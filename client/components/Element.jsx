import React from 'react'


function Element (props) {
  const elementStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: props.element.color 
  }
  return (
    <div style={elementStyle}>
      <div>
        {props.element.name}
      </div>
    
    </div>
  )
}


export default Element