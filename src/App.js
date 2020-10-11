import React from 'react'
import Row from './Row'
import endpoint from './helpers/endpoints'
const App = () => {
  return <>
    <Row title='NETFLIX ORIGINALS' src={endpoint.getNetflixOriginals} />
    <Row title='Trending Now' src={endpoint.getTrending} />
  </>
}

export default App