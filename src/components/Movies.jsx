import React from 'react'
import MoviesCard from "./MoviesCard"

const Movies = ({movies}) => {
  // console.log(movies);
  return (
    <div className="w-full grid md:grid-cols-4 gap-4 p-3">
     {
        movies.map((movie, index) => {
          return <MoviesCard key={index} img={movie.poster_path} tittle={movie.title} rating={movie.vote_average}/>
        })
     } 
    </div>
  )
}

export default Movies