import { useEffect, useState } from "react";
import { fetchTmdb } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";


const HomePage = () => {
   const [trendMovie, setTrendMovie] = useState ([]);

   useEffect(() => {
    const abortController = AbortController();

    const getData = async () => {
        try {
        const trendMovie = await fetchTmdb(abortController.signal);
        setTrendMovie(trendMovie);
        } catch (error) {
            console.log(error);
            
        }
    };
    getData();
    return () => {
        abortController.abort();
    };
   }, [])

    return (
    <div>
        <h2 className={s.title}>Trend Today</h2>
        <MovieList movies={trendMovie}/>
    </div>
    );
};

export default HomePage;