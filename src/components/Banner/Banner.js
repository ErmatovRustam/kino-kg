import React, { useState, useEffect } from 'react'
import URL from '../axios'
import requests from '../requests'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await URL.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length) ]
            )
            return request;
        }
        fetchData();
    },[])
    console.log(movie)
    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                // backgroundPosition: 'center center',
                boxSizing: 'border-box'
                
        }}
        >
            <div className = 'banner-contents'>
                <h1 className = 'banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                <button className = 'banner-button'>PLAY</button>
                <button className = 'banner-button'>My List</button>
                 <h4 className="banner-description">{ movie?.overview}</h4>
                </div>
            </div>
        </header>
    )
}

export default Banner
