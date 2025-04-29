import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { fetchTmdbById } from "../../services/api";


const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);
    const { moviesId } = useParams;
    const location = useLocation();
    const goBackRef = useRef(location.state ?? '/')

    useEffect(() => {
        const getData = async () => {
            try {
           const data = await fetchTmdbById(moviesId);
           setMovies (data);
            } catch(error) {
         console.log(error);
             }
        }
        getData();
    }, [moviesId])
    return (
        <>
          <Link to={goBackRef.current}>
            <button className={s.linkButton}>Go back</button>
          </Link>
          <div className={s.wrapperBox}>
            <div className={s.flexWrapper}>
              <img
                className={s.imageContainer}
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path} `}
                width={500}
              />
              <div className={s.aboutMovie}>
                <h2>{movies.title}</h2>
                <p>{movies.overview}</p>
                <h3>TMBD {movies.vote_average}</h3>
              </div>
            </div>
            <div>
              <hr />
              <p>Additional information</p>
              <nav>
                <NavLink to="moviecast" className={s.linkReview}>
                  Cast{" "}
                </NavLink>
                <NavLink to="moviereviews" className={s.linkReview}>
                  Reviews{" "}
                </NavLink>
              </nav>
              <hr />
              <Outlet />
            </div>
          </div>
        </>
      );
    };
    
export default MovieDetailsPage;


