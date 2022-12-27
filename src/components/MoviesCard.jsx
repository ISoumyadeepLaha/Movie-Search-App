import React from 'react'

const MoviesCard = ({img,tittle,rating}) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="shadow bg-[#CAD5E2] min-h-[200px] mt-3 pb-1 ">
        <img src={IMGPATH+img} alt="poster" className="w-full hover:scale-90 hover:ease-in-out hover:duration-300"/>
        <div className="flex flex-col justify-between px-2 items-start gap-2 p-4">
          <h3 className="text-xl">{tittle}</h3>
          <h3 className="text-amber-600 text-xl font-bold">Rating:{rating}</h3>
        </div>
    </div>
  )
}

export default MoviesCard