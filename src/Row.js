import React, {useState, useEffect} from 'react'
import axios from './helpers/axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

import './Row.css'
const imageSrc = 'https://image.tmdb.org/t/p/w500'
const Row = ({title, src, featured}) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(src)
      setMovies(response.data.results)
      // return response.data.results
    }
    getMovies()
  }, [src])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
      .then(url => {
        console.log(url)
        const urlParams = new URLSearchParams(new URL(url).search)
        console.log(urlParams.get('v'))
        setTrailerUrl(urlParams.get('v'))
      })
      .catch(error => console.log(error))
    }
  }
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie => <img key={movie.id} onClick={() => handleClick(movie)} className={`row__poster ${featured && 'row__featured_poster'}`} src={`${imageSrc}${featured ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />)}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row