let API_KEY = '86c352242dc5a8b827d08c598a1e04ef'

const urls = {
  getTrending: `/trending/all/week?api_key=${API_KEY}`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default urls