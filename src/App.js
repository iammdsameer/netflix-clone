import React from 'react'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import endpoint from './helpers/endpoints'

import './App.css'

const App = () => {
  return <div className='parent'>
    <Nav />
    <Banner />
    <Row title='NETFLIX ORIGINALS' src={endpoint.getNetflixOriginals} featured />
    <Row title='Trending Now' src={endpoint.getTrending} />
    <Row title='Top Rated' src={endpoint.getTopRated} />
    <Row title='Comedy Movies' src={endpoint.getComedyMovies} />
    <Row title='Action Movies' src={endpoint.getActionMovies} />
    <Row title='Horror Movies' src={endpoint.getHorrorMovies} />
    <Row title='Romance Movies' src={endpoint.getRomanticMovies} />
    <Row title='Documentaries' src={endpoint.getDocumentaries} />
  </div>
}

export default App