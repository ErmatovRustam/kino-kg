import React, { useState, useEffect } from 'react'
import URL from '../axios';
import './row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import LINK from '../axios'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        async function fetchData() {
            const request = await LINK.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390px',
        width: '100%',
        playerVars: {
            // link
            autoplay: 1,
        },
    }

    const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await URL.get(
        `/movie/${movie.id}/videos?api_key=4d301b3f212e85a11deaeaba1b1222a0`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };

    // console.table(movies)
    return (
        <div className = 'row'>
            <h3>{title}</h3>
            <div className="row_icons">
                {movies.map((el) => {
                    return (
                        <img onClick={() => handleClick(el)} key={el.id} className={`row_icon ${isLargeRow && 'row_iconLarge'}`} src={base_url + (isLargeRow ? el.poster_path : el.backdrop_path)  } alt={el.name}/>
                    )
                })}
            </div>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
