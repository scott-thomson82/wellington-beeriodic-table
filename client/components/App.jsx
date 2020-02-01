import React from 'react'
import Header from './Header'
import Element from './Element'

import beersData from '..data/beersData'



const App = () => {

  
    
    const beerComponents = beersData.map((beers => <Element number={beers.number} beerColor={beers.beerColor} beerStyle={beers.beerStyle} symbol={beers.symbol} />)
      )

  


return (
    <React.Fragment>
    <Header />
    {beerComponents}
    </React.Fragment>
  )
}

export default App

