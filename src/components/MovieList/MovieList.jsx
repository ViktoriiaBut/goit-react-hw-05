import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
    <div className={s.ContainerList}>
        <ul>
        {movies.map((movie) => (
            <li>
               <div key={movie.id} className={s.ContainerImg}> 
               <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        <img className={s.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </Link>
               </div>
               </li>
    ))
}
        </ul>
    </div>
    );
};

export default MovieList;