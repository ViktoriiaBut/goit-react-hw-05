import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../../services/api";

const MoviesPage = () => {
    const [searchMovie, setSearchMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  
    const query = searchParams.get('query');
  
    useEffect(() => {
      if (!query) return;
  
      const getData = async () => {
        try {
          const data = await fetchSearchMovies(query);
          setSearchMovie(data);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }, [query]);
  
    const handleChangeQuery = (newValue) => {
      setSearchParams({ query: newValue });
    };
  
    return (
      <div>
        <h2>MoviesPage</h2>
        <MovieSearch handleChangeQuery={handleChangeQuery} />
        <MovieList trendMovie={searchMovie} />
      </div>
    );
  };

export default MoviesPage;

