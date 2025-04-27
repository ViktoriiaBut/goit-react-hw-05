import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
    const setActiveClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active)
    }
    return (
        <div>
            <nav className={s.nav} >
                <NavLink to='/' className={setActiveClass}>
                 Home
                </NavLink>
                <NavLink to='/movies' className={setActiveClass}>
                 Movies
                </NavLink>
            </nav>
        </div>
    )
}

export default Navigation;