const API_KEY="bd32cf80fb999b6a1ed489f81c59aa57"
const API='AIzaSyDp8KnJuM3tbCvNd83-GQm4s-OQ75UPZY0'
const channelId='UCWOA1ZGywLbqmigxE4Qlvuw'
const result=10
const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchNet:`/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`,

}
export default requests