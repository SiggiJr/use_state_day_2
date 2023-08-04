import './MovieItem.scss'
import { v4 as uuidv4 } from 'uuid';

const MovieItem = (props) => {
  return ( 
    <>
    <article className='movie_item'>
      <p>{props.movie.title}</p>
      <p>{props.movie.year}</p>
      <p>{props.movie.director}</p>
      <p>{props.movie.duration}</p>
      <p>{props.movie.rate}</p>
      {props.movie.genre.map(genre => <p className='genre' key={uuidv4()}>{genre}</p>)}
    </article>
    </>
);
}

// title: "The Shawshank Redemption",
// year: "1994",
// director: "Frank Darabont",
// duration: "2h 22min",
// genre: ["Crime", "Drama"],
// rate: "9.3",

export default MovieItem;