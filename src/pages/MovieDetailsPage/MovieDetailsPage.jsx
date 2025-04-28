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
        <Link to={goBackRef.current} className={s.linkButton}>Go back</Link>
        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path} `}/>
        <div>
            <h2>{movies.title}</h2>
            <p>{movies.view}</p>
        </div>
    <div>
        <h2>MovieDetailsPage</h2>
        <nav>

            <NavLink to='cast' className={s.linkCR}></NavLink>
            <NavLink to='reviews' className={s.linkCR}></NavLink>
        </nav>
        <Outlet />
    </div>
    
    </>
)}

export default MovieDetailsPage;