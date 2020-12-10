import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function NavMenu(){
    return (
        <>
        <NavLink to="/" className="links">Main</NavLink>
        <Link to="/news" className="links">News</Link>
        <Link to="/about" className="links">About</Link>
        </>
    )
}