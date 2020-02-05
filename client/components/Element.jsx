import React from 'react'
import { Link } from 'react-router-dom'


function Element (props) {
  console.log(props)
    return (
    <div>


    <div className="element">

      <Link to='/beers'>

      <p>{props.number}</p>
      <p>{props.beerColor}</p>
      <p>{props.beerStyle}</p>
      <p>{props.symbol}</p>

      </Link>


    </div>
    </div>
    
    
  )
}


export default Element