import React from 'react'
import { Link } from 'react-router-dom'

export const NetflxMovies = () => {


    const movies = [
        {
            id:103,
            name :"Titanic"
        },
        {
            id:104,
            name :"The Dark Knight"
        }
    ]

  return (
    <div>
        <h1>MOVIES</h1>
        <ul>
            <li>
                <Link to = "/netflix/movies/detail/101">Avangers</Link>
            </li>
            <li>
                <Link to = "/netflix/movies/detail/102">Spiderman</Link>
            </li>
        </ul>
        {
            movies.map((movie)=>{
                return(
                    <ul>
                        <li>
                            <Link to = {`/netflix/movies/detail/${movie.id}`}>{movie.name}</Link>
                        </li>
                    </ul>
                )
            })
        }
    </div>
  )
}
