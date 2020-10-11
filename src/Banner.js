import React, {useState, useEffect} from 'react'
import axios from './helpers/axios'
import endpoint from './helpers/endpoints'

import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    const getMovies = async () => {
      const {data} = await axios.get(endpoint.getNetflixOriginals)
      setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
    }
    getMovies()
  }, [])
  console.log(movie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + '...' : str
  }

  return (
    <header className='banner' style={{
      backgroundSize: 'cover',
      backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      backgroundPosition: 'center center'
    }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h2 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className='banner__fade' />
    </header>
  )
}

export default Banner