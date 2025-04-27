import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { useEffect, useState } from "react";
import { fetchTmdbById } from "../../services/api";

const MovieDetailsPage = () => {
    const [movies, setMovies] = useState([]);
    const { moviesId } = useParams;

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