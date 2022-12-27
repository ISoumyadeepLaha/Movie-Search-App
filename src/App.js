import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([1]);
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  }

  const getAllMovies = async () => {
    await axios
      .get(APIURL)
      .then((res) => {
        // console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getSearchedMovies = async () => {
    await axios.get(SEARCHAPI + search)
    .then((res) => {
      // console.log(res.data.results);
      setMovies(res.data.results);
    }).catch((err) => {
      console.error(err)
    })
  }

  useEffect(() => {
    setMovies([]);
    search === "" ? getAllMovies() : getSearchedMovies();
  }, [search]);

  return (
    <div className=" min-h-[50vh] max-w-6xl mt-3 shadow-xl border mx-auto bg-[#8ea2bb] mb-3">
      <h1 className="text-center text-3xl p-3 font-bold">
        Search Your Favrouite Movies
      </h1>
      <input
        type="search"
        className=" w-8/12 md:w-9/12 md:mx-40 mx-20 p-3 text-xl text-gray-700 my-3 border boder-black bg-[#CAD5E2] outline-none"
        value={search}
        onChange={changeSearch}
      />
      <hr />
      {
        movies.length === 0
        ?
        <div className="text-center text-5xl mt-10">Loading...</div>
        :
        <Movies movies={movies} />
      }
      
    </div>
  );
}

export default App;
