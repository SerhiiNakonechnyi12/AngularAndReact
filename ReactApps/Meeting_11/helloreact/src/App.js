import logo from "./logo.svg";
import "./App.css";
import React from "react";
import image1 from "../src/image/image1.jpg"
import image2 from "../src/image/image2.jpg"

function App() {
  return (
    //<div className="App">
    /*
      { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }*/

    <>
      <h1>Hello React from VS Code</h1>
      <div>Текущее время: {new Date().toLocaleTimeString()}</div>
      <CurrentDate></CurrentDate>
      <button onClick={ClickHandler}>Push me!</button>

      {/* Задание 1
    Создайте и запустите базовое приложение React, 
    выводящее надпись «Hello, React» в браузер.
    Используйте синтаксис JSX и альтернативу в виде createElement. 
    При разработке нужно использовать функциональные компоненты. */}
      <div>
        <h1>Hello react</h1>
        <h1>{HelloR()}</h1>
        
      </div>

      {/* Задание 2
    Создайте и запустите приложение React, выводящее краткую информацию 
    о вас в браузер. Например: ФИО, контактный телефон, электронный адрес.
    При разработке нужно использовать функциональные 
    компоненты и синтаксис JSX. */}
      <div>
        <h1>Короткая информация:</h1>
        <p>Fullname: {user.fullname}</p>
        <p>Tel: {user.tel}</p>
        <p>Email: {user.email}</p>
        <p>Полная информация: {user.showFullInfo()}</p>
      </div>
      {/* Задание 3
      Создайте и запустите приложение React, выводящее краткую информацию о 
      вашем городе в браузер. Например: название города, название страны, 
      год основания, несколько фотографий достопримечательностей вашего города.
      При разработке нужно использовать функциональные компоненты и синтаксис JSX. */}
      <div>
        <h1>Информация о городе</h1>
        <p>Название: {myTown.name}</p>
        <p>Страна: {myTown.country}</p>
        <p>Дата основания: {myTown.yearOfFoundation}</p>
        <p>Фото Кривого Рога:</p>
        {/* <p>image2: {myTown.photo2}</p> */}
        <img src={image1}></img>
        <img src={image2}></img>
      </div>
    </>
  );
}

export default App;

const style1 = {
  border: "1px dotted magenta",
  backgroundColor: "skyblue",
};

function CurrentDate() {
  return <div>Сегодня: {new Date().toLocaleTimeString()}</div>;
}

function ClickHandler() {
  alert("Button was clicked!");
}

function HelloR() {
  //return React.createElement("p", null, "Nothing will come of nothing");
  return <h3>Hello react</h3>;
}

const user = {
  id: 1,
  fullname: "Serhii Nakonechnyi",
  tel: 80968323716,
  email: "Serhii19911204@gmail.com",
  showFullInfo: function () {
    return `${this.fullname} ${this.tel}, ${this.email}`;
  },
};

const myTown = {
  id: 1,
  name: "Kriviy Rig",
  country: "Ukraine",
  yearOfFoundation: 1775,
  photo1: "../src/image/image1.jpg",
  photo2: {image2},
  showFullInfo: function () {
    return `${this.name} ${this.country}, ${this.yearOfFoundation}`;
  },
};
