import MovieItem from '../MovieItem/movieItem.component';
import './movieList.style.css';

const MovieList = ({ movies }) => {

    return (

        <div className="container" >
            <div className="movielist row row-cols-5">
                {
                    movies.map(movie => (
                        <MovieItem {...movie} />
                    ))
                }
            </div>
        </div>
    );

}


export default MovieList;