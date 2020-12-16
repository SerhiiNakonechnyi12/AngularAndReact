import React from "react";

//____________________________________________________________________________________________________________________
// Задание 1
// Создайте и запустите базовое приложение React, выводящее надпись
// «Hello, React» в браузер.
// Используйте синтаксис JSX и альтернативу в виде createElement. При
// разработке нужно использовать функциональные компоненты.

const title="React";
class Hello extends React.Component {
    render() {
     return React.createElement('div', null, `Привет, ${title}`);
   }
 }

 //export default Hello;
 export {Hello,title};