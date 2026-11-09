import './App.css';
function App() {
  return (
    <>
      <NavBar>
        <SearchBar />
        <Results />
      </NavBar>
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
export default App;
