import MovieItem from '../MovieItem/movieItem.component';

const MovieList = ({ movies }) => {

    console.log(movies);

    return (

        <div>
            <ul>
                {
                    movies.map(movie => (
                        <li>
                            <MovieItem {...movie} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );

}


export default MovieList;