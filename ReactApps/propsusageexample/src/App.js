import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import RandomNumber from "./RandomNumber";

function App() {
  let quote = "Цитата изветного человека";
  let author = "Уильям Шекспир";
  return (
    <>
      <Quote text={quote} author={author}></Quote>
      <RandomNumber>min={3} max={10}</RandomNumber>
    </>
  );
}

export default App;
