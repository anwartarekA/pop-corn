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
      <nav>
        <Logo />
        <SearchBar />
        <Results />
      </nav>
    </>
  );
}
function Logo() {
  return (
    <>
      <span>🍿</span>
      <p>popcorn</p>
    </>
  );
}
function SearchBar() {
  return (
    <>
      <form>
        <input type='search' placeholder='search for a movie...' />
      </form>
    </>
  );
}
function Results() {
  return (
    <>
      <p>found x of movies</p>
    </>
  );
}
export default App;
