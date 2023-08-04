import MovieItem from '../MovieItem/MovieItem';
import {movies} from '../database/database'
import { v4 as uuidv4 } from 'uuid';
import './MovieDataBase.scss'
import { useState } from 'react';

const MovieDataBase = () => {
  
  const [moviesDatabase, setMoviesDatabase] = useState([...movies])
  const [movieSearch, setMovieSearch] = useState("");

  const sortByDateAscending = () => {
    setMoviesDatabase(prevDatabase => [...prevDatabase].sort((a, b) => a.year - b.year))
  }

  const sortByDateDescending = () => {
    setMoviesDatabase(prevDatabase => [...prevDatabase].sort((a, b) => b.year - a.year))
  }

  const sortByRating = () => {
    setMoviesDatabase(prevDatabase => [...prevDatabase].sort((a, b) => b.rate - a.rate))
  }

  const sortByAtoZ = () => {
    setMoviesDatabase(prevDatabase => [...prevDatabase].sort((a, b) => {
      if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
    }))
  }

  const sortByZtoA = () => {
    setMoviesDatabase(prevDatabase => [...prevDatabase].sort((a, b) => {
      if (a.title < b.title) {
            return 1;
          } else if (a.title > b.title) {
            return -1;
          } else {
            return 0;
          }
    }))
  }

  const searchForMovies = (event) => {
    setMovieSearch(prevMovieSearch => prevMovieSearch = event.target.value)
    const searchKey = event.target.value.trim().toLowerCase();
    setMoviesDatabase([...movies].filter(movie => movie.title.toLowerCase().includes(searchKey)))
  }

  return ( 
<>
<div className="sort_categories">
  <button onClick={sortByDateAscending}>Sort by Date Ascending</button>
  <button onClick={sortByDateDescending}>Sort by Date Descending</button>
  <button onClick={sortByRating}>Best Rate</button>
  <button onClick={sortByAtoZ}>A-Z</button>
  <button onClick={sortByZtoA}>Z-A</button>
  <input type="text" onChange={searchForMovies} value={movieSearch}/>
</div>
<div className='movies_container'>
  {moviesDatabase.map(movie => <MovieItem 
  key={uuidv4()} 
  // title={movie.title} 
  // year={movie.year} 
  // director={movie.director}
  // duration={movie.duration}
  // genre={movie.genre}
  // rate={movie.rate}
  movie={movie}
  />)}
</div>
</>
  );
}

export default MovieDataBase;