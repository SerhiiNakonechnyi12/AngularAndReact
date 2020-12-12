import React from "react";
import {NavLink} from "react-router-dom";

export default function NavMenu(){
    let active = {color: "red"};
    return (
        <nav className="">
        <NavLink to="/" activeStyle={active}>Main</NavLink>
        <NavLink to="/posts" activeStyle={active}>Posts</NavLink>
        </nav>
    )
    
}