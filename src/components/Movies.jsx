import React from 'react'
import MoviesCard from "./MoviesCard"

const Movies = () => {
  return (
    <div className="w-full grid md:grid-cols-4 gap-4 p-3">
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
    </div>
  )
}

export default Movies