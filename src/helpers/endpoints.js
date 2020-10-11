let API_KEY = '86c352242dc5a8b827d08c598a1e04ef'

const urls = {
  getTrending: `/trending/all/week?api_key=${API_KEY}`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default urls