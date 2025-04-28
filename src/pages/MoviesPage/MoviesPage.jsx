import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSerchMovies } from "../../services/api";

const MoviesPage = () => {
    const [searchMovie, setSearchMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');

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
    }, [query]);

    const handleChangeQuery = (newValue) => {
        searchParams.set("query", newValue) ?? '';
        setSearchParams(newValue);
    }
        
    return (
    <div>
        <h2>MoviesPage</h2>
        <MovieSearch handleChangeQuery={handleChangeQuery}/>
        <MovieList data ={searchMovie} />
    </div>
    )
}

export default MoviesPage;