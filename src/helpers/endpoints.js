let API_KEY = process.env.API_KEY

const urls = {
  getTrending: `/trending/all/week?api_key=${API_KEY}`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default urls