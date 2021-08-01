import React from 'react'
import "./banner.css"
import axios from '../../axios'
import { useEffect } from 'react'
import { useState } from 'react'
import requests from '../../request'
import ReactPlayer from 'react-player/youtube'

//AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA
const API='AIzaSyDp8KnJuM3tbCvNd83-GQm4s-OQ75UPZY0'
const channelId='UCWOA1ZGywLbqmigxE4Qlvuw'
const result=10


//https://www.googleapis.com/youtube/v3/search?key={}&channelId={}&part=snippet,id&order=date&maxResults=10
var finalUrl=`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`


function Bann() {
    
    const [mov, setMov] = useState(false)
    const [mv, setMv] = useState([])
    
    const [movie,setMovie]=useState([])
    useEffect(() => {
        async function fetchData()
        {
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            )
        return request;}
      fetchData();   
    }, [])
    


  

    function truncate(string,n)
    {
        if(string.length >n)
        return string.substr(0,n-1)+'...'

        else return string

    }
    function Play(e){
        e.preventDefault();
       setMov(true)

         fetch(finalUrl)
          .then((response) => response.json())
          .then((responseJson) => {
             console.log(responseJson.items[Math.floor(Math.random()*11)].id.videoId)
            setMv(responseJson.items[Math.floor(Math.random()*10)].id.videoId)
          })
          .catch((error) => {
            console.error(error);
          });
    }

    function Pause(e){
        e.preventDefault();
       setMov(false)

         
    }

    return (
            <>
            <header className="banner ban_image"
            style={{
                backgroundSize:"cover",
                
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center",
            }}
            >
    
            <div className="banner_contents">
                <h1 className="banner_title">{movie.name}</h1>
                <div className="banner_button">
                <button className="bb">Play</button>
                 <button className="bb">My List</button>
                 <button className="bb" onClick={!mov?(Play):(Pause)}>{!mov?("Play A Sample Video"):("Stop Watching")}</button>
                </div>
                <h1 className="ban_dis">
                    {truncate(``,150)}
                    {movie.overview}
                    
                </h1>
                </div> 
                <div className="banner_fade"/>
            </header>
                
          {
              mov?(
              
              <div className="movie">
              <iframe
               className="mov"
              width="560"
               height="315" 
               src={`https://www.youtube.com/embed/${mv}`}
               title="YouTube video player" 
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen>
               </iframe>
               </div>

               ):(console.log("nope")
               
               )
          }  
        </>
    )
}

export default Bann
