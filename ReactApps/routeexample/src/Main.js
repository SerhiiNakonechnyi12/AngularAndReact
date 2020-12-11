import React from "react";
import { Switch, Route, Router } from "react-router-dom";

export function Main(){
    return <h2>Main</h2>
}

export function About(){
    return <h2>About page</h2>
}

export function NotFound(){
    return <h2>404 Page Not Found</h2>
}

export function News(){
    return (
        <>   
            <Switch>
                <h2>News</h2>
                <Route exact path="/news" children={()=>{<h2>News</h2>}}></Route>
                <Route path="/news/london" component={London}></Route>
                <Route path="/news/kyiv" component={Kyiv}></Route>
                <Route path="/news/lviv" component={Lviv}></Route>              
            </Switch>
        </>
    )
}

export function London(){
    return <h3>Info about London</h3>
}

export function Kyiv(){
    return <h3>Info about Kyiv</h3>
}

export function Lviv(){
    return <h3>Info about Lviv</h3>
}

export function Staff(props){
    let department = "Не задан";
    let id = "Не задан";
    if(typeof props.match.params.department !== "undefined")
    department = props.match.params.department;
    if(typeof props.match.params.id!=="undefined")
    id = props.match.params.id;

    return (
        <>
            <h3>Информация о сотруднике</h3>
            <div>Отдел: {department}</div>
            <div>Id: {id}</div>
        </>
    )
}

export function Product(props){
    let id=props.match.params.id;
    return (
        <>
        <h2>Product</h2>
        <div>Id: {id}</div>
        </>
    )
}