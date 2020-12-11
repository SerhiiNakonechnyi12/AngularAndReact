import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function NavMenu(){
    return (
        <>
        <NavLink to="/" className="links">Main</NavLink>
        <NavLink to="/news" className="links">News</NavLink>
        <NavLink to="/about" className="links">About</NavLink>
        </>
    )
}