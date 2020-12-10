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

export function Product(props){

}