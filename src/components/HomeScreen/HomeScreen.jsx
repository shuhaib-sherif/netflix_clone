import React from 'react'
import NavBar from '../nav_bar/NavBar';
import './HomeScreen.css'
import Bann from "../banner/Bann"
import requests from '../../request';
import Row from '../Row/Row';






function HomeScreen() {
    return (
        <div className='HomeScreen'>
            <NavBar/>
            <Bann/>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

        </div>
    )
}


export default HomeScreen;
