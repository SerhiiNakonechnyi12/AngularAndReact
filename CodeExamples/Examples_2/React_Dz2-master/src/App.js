
import './App.css';
import React from "react";
import { Hello, title } from "./helloEx.js";
import { User } from "./user";
import { City } from "./myCity";
import ItemList, { listItem } from './ItemList';

function App() {
  let listData = {
    title: "Лучшие фото:",
    items: [City.photos]
  }
  return (
    <div className="App">
      <h1> Hallo, {title}!</h1>
      <hr></hr>
      <Hello></Hello>
      <hr></hr>
      <div>
        <p>Name: {User.name}</p>
        <p>Surname: {User.surname}</p>
        <p>Telephon: {User.tel}</p>
        <p>Email: {User.email}</p>
      </div>
      <hr></hr>
      <div class="color">
        <h1>Город: {City.city}</h1>
        <h3>Страна: {City.country}</h3>
        <h5>Год основания: {City.year}</h5>
        <p class="text">{City.text}</p>
        <div class="forImg">
          {/* <ItemList data={listData}></ItemList> */}
         <img class="img" src={City.photos[1]}></img>
         <img class="img" src={City.photos[2]}></img>
         <img class="img" src={City.photos[3]}></img>
         <img class="img" src={City.photos[4]}></img>
         {/* <img class="img" src={City.photos[0]}></img> */}
        
        </div>
      </div>
    </div>
  );
}
export default App;


