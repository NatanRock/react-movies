import { Movie } from './Movie';

export const Movies = (props) => {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {
                movies.length ?
                    movies.map((movie) => ( <Movie key={movie.id} {...movie} />))
                    : (<h2>No movies found</h2>)
            }
        </div>
    )
}