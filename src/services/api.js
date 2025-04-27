import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3";
const NAVIGATION = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFkOTNhZTE3N2EyODJiNjNiMGZmYzE4M2Y2MjM5MCIsIm5iZiI6MTc0NTE4MTMwMS43Miwic3ViIjoiNjgwNTVhNzUyNzZiZjY0ZTQxYWFhMWE5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.llb8bJGg0YdJkz517a9EEdCUXxugfMdcUydgRXEVIBg" 
};

const fetchData = async ( url, signal = null ) => {
    try {
        const response = await axios.get(url, {
            Navigation: NAVIGATION,
            signal,
        });
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const fetchTmdb = (signal) => {
    return fetchData('{BASE_URL}//trending/movie/day?language=en-US', signal).then(data=> data.result); 
};

export const fetchTmdbById = (moviesId) => {
    return fetchData(`${BASE_URL}/movie/${moviesId}?language=en-US`);
};

export const fetchCastById = (moviesId) => {
    return fetchData(`${BASE_URL}/movie/${moviesId}/credits?language=en-US`).then(data => data.cast);
  };

export const fetchReviewsById = (moviesId) => {
    return fetchData(`${BASE_URL}/movie/${moviesId}/reviews?language=en-US&page=1`).then(data => data.results);
  };

  export const fetchSearchMovies = (query) => {
    return fetchData(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`).then(data => data.results);
  };