import React, {useState, useEffect} from 'react'
import axios from './helpers/axios'

const Row = ({title, src}) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(src)
      setMovies(response.data.results)
      // return response.data.results
    }
    getMovies()
  }, [])
  return (
    <div>
      <h1>{title}</h1>
      {movies.map(movie => <img className='row__posters' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />)}
    </div>
  )
}

export default Row