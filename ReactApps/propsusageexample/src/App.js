import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import RandomNumber from "./RandomNumber";
import ItemList, { ListItem } from "./ItemList";

function App() {
  let quote = "Цитата изветного человека";
  let author = "Уильям Шекспир";
  let listData = {
    title: "Список предстоящих праздников",
    items: ["День Святого Николая", "Рождество", "New Year"]
  }
  return (
    <>
      <Quote author={author} text={quote}></Quote>
      <RandomNumber min={3} max={10}></RandomNumber>
      <ItemList data={listData}></ItemList>
    </>
  );
}

export default App;
