import React from 'react'
import Header from './Header'
import Element from './Element'



import beersData from '../data/beersData'



const App = () => {
  const beerComponents = beersData.map(beer => <Element number={beer.number} beerStyle={beer.beerStyle} symbol={beer.symbol} beerColor={beer.color}/>)
  
  return (
    <React.Fragment>
    <Header />
    {beerComponents}
    
    </React.Fragment>
  )
}

export default App

