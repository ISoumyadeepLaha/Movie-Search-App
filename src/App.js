import { useState } from 'react';
import './App.css';
import Movies from './components/Movies';

// const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className=" min-h-[50vh] max-w-6xl mt-3 shadow-xl border mx-auto bg-[#8ea2bb] mb-3">
      <h1 className="text-center text-3xl p-3 font-bold">Search Your Favrouite Movies</h1>
     <input type="search" className=" w-8/12 md:w-9/12 md:mx-40 mx-20 p-3 text-xl text-gray-700 my-3 border boder-black bg-[#CAD5E2] outline-none" />
     <hr />
     <Movies/>
    </div>
  );
}

export default App;
