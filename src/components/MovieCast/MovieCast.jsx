import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
           const data = await fetchCastById(movieId);
           setCast(data)
            } catch (error) {
            console.log(error);
             }
        };
        getData(); 
       }, [movieId]);

    return (
        <div>
        <ul>
          {cast.map((item) => (
            <li key={item.id} className={s.listCast}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className={s.imageCast} />
                <div className={s.listActors}>
                <span>Actor: {item.name}</span>
                <span>Character: {item.character}</span>
            </div>
            </div>
            </li>
          ))} 
           
        </ul>
        </div>
    );
};

export default MovieCast;