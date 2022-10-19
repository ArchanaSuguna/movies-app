import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

 const getMovieRequest = async() => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apiKey=f2499314`;
  const response = await fetch(url);
  const responseJson = await response.json();
  if(responseJson.Search){
    setMovies(responseJson);
  }
 }

 useEffect(() => { 
     getMovieRequest(searchValue);
 },[searchValue])

 const saveTolocalStorage = (items) => {
    localStorage.setItem('movie-list', JSON.stringify(items));
 }

  const addToFavorites = (movie) => {
     const newFavorites = [...favorites, movie];
     setFavorites(newFavorites);
     saveTolocalStorage(newFavorites)
  }

  const removeFromFavorites = (movie) => {
    const movieResult = favorites.filter((movieList, index) => movieList.imdbID!==movie.imdbID);
    setFavorites(movieResult);
    saveTolocalStorage(movieResult)
  }

  console.log("The mvi", favorites);
  return (
    <div className="App">
      <div>
    <MovieListHeading heading="Movies" />
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    <MovieList movies={movies && movies.Search} handleFavorite={addToFavorites} />
    </div>
    <div>
    <MovieListHeading heading="Favorites" /> 
    <MovieList movies={favorites} handleFavorite={removeFromFavorites} />
    </div>
    </div>
  );
}

export default App;
