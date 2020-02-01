import React from 'react'


function Element (props) {
  console.log(props)
    return (
    <div>
    <div className="element">
      <p>{props.number}</p>
      <p>{props.beerColor}</p>
      <p>{props.beerStyle}</p>
      <p>{props.symbol}</p>
    </div>
    </div>
    
    
  )
}


export default Element