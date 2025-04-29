import s from "./MovieList.module.css";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ trendMovie }) => {
  const location = useLocation();

  return (
    <ul className={s.ulList}>
      {trendMovie?.length > 0 && trendMovie.map((item) => (
        <li key={item.id} className={s.ContainerImg}>
          <NavLink to={`/movies/${item.id.toString()}`} state={ location }>
          {item.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};



export default MovieList;