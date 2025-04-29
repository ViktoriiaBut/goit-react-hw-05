import s from "./MovieList.module.css";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ trendMovie }) => {
  const location = useLocation();

  return (
    <ul className={s.List}>
      {trendMovie?.length > 0 && trendMovie.map((item) => (
        <li key={item.id} className={s.ContainerImg}>
          <NavLink to={`/movies/${item.id.toString()}`} state={ location }>
            <img
              className={s.poster}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              width={500} alt={item.title} />
               <div className={s.spanWrapper}>
                  <span>{item.original_title}</span>
                  <span>Data release: {item.release_date}</span>
                  <span> TMDB {item.vote_average.toFixed(1)}</span>
                </div>
            
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

