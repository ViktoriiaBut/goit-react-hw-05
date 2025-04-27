import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
    const [searchMovie, setSearchMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const getData = async () => {
            try {
             const data = await fetchSerchMovies(query);
             setSearchMovie(data);
            } catch (error){
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleChangeQuery = (newValue) => setSearchParams(newValue);
    return (
    <div>
        <h2>MoviesPage</h2>
        <MovieSearch handleChangeQuery={handleChangeQuery}/>
        <MovieList data ={searchMovie} />
    </div>
    )
}

export default MoviesPage;