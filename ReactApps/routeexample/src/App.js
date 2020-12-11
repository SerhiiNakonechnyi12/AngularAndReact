import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Main, About, News, NotFound, Product } from './Main';
import NavMenu from "./NavMenu";


function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu></NavMenu>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/news" component={News}></Route>
          {/* <Route component={NotFound}></Route> */}
          <Route path="/staff/:department/:id" component={Staff}></Route>
          <Route children={()=><h2>Not found from arrow function</h2>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
