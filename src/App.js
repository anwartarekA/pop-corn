import './App.css';
import { movies } from './dumeMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <>
      <NavBar>
        <SearchBar />
        <Results />
      </NavBar>
      <Main />
    </>
  );
}

function NavBar({ children }) {
  return (
    <>
      <nav className='nav'>
        <Logo />
        <SearchBar />
        <Results />
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
function Results() {
  return (
    <div className='result'>
      <p>found: x of movies</p>
    </div>
  );
}
function Main() {
  return (
    <div className='main'>
      <MoviesList />
      <WatchedMovies />
    </div>
  );
}
function MoviesList() {
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
