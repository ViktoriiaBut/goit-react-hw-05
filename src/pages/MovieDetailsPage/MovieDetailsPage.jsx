import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { fetchTmdbById } from "../../services/api";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTmdbById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      <Link to={goBackRef.current}>
        <button className={s.linkButton}>Go back</button>
      </Link>

      {movie && (
        <div className={s.wrapperBox}>
          <div className={s.flexWrapper}>
            <img
              className={s.imageContainer}
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              width={400}
              alt={movie.title}
            />
            <div className={s.aboutMovie}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <h3>TMDB {movie.vote_average}</h3>
            </div>
          </div>

          <div>
            <hr />
            <p>Additional information</p>
            <nav>
              <NavLink to="moviecast" className={s.linkReview}>
                Cast
              </NavLink>
              <NavLink to="moviereviews" className={s.linkReview}>
                Reviews
              </NavLink>
            </nav>
            <hr />
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;