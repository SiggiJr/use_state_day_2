import './MovieItem.scss'
import { v4 as uuidv4 } from 'uuid';

const MovieItem = (props) => {
  return ( 
    <>
    <article className='movie_item'>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <p>{props.duration}</p>
      <p>{props.rate}</p>
      {props.genre.map(genre => <p className='genre' key={uuidv4()}>{genre}</p>)}
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