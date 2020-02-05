import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Element from './Element'
import Beers from './Beers'



import beersData from '../data/beersData'



const App = () => {
  const beerComponents = beersData.map(beer => <Element key={beer.number} number={beer.number} beerStyle={beer.beerStyle} symbol={beer.symbol} beerColor={beer.beerColor}/>)
  
  return (
    <Router>
    <React.Fragment>
    <Header />
    

    <Route exact path='/' component={() => beerComponents} />

    <Route path='/beers' component={Beers} />
    
    </React.Fragment>
    </Router>
  )
}

export default App

