import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
const apiKey = 'f1d49a00';
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=matrix}`,
      );
      const result = await res.json();
      const data = result.Search;
      setMovies(data);
    }
    fetchMovies();
  }, []);
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}

function NavBar({ movies }) {
  return (
    <>
      <nav className='nav'>
        <Logo />
        <SearchBar />
        <Results movies={movies} />
      </nav>
    </>
  );
}
function Logo() {
  return (
    <div className='logo'>
      <span className='imoji'>🍿</span>
      <p className='title'>popcorn</p>
    </div>
  );
}
function SearchBar() {
  return (
    <div className='search'>
      <form>
        <input type='search' placeholder='search for a movie...' />
      </form>
    </div>
  );
}
function Results({ movies }) {
  return (
    <div className='result'>
      <p>found: {movies.length} of movies</p>
    </div>
  );
}
function Main({ movies }) {
  return (
    <div className='main'>
      <MoviesList movies={movies} />
      <WatchedMovies />
    </div>
  );
}
function MoviesList({ movies }) {
  return (
    <div className='movies'>
      <span className='fold'>-</span>
      <ul>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </div>
  );
}
function Movie({ movie }) {
  return (
    <li>
      <div className='box'>
        <div className='content'>
          <p>{movie.Title}</p>
          <span>
            {' '}
            <FontAwesomeIcon icon={faCalendar} /> {movie.Year}
          </span>
        </div>
        <div>
          <img className='poster' src={movie.Poster} alt='poster' />
        </div>
      </div>
    </li>
  );
}
function WatchedMovies() {
  return <div className='watched'></div>;
}
export default App;
