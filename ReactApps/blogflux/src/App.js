import logo from './logo.svg';
import './App.css';
import NavMenu from '../../routeexample/src/NavMenu';
import { Switch, Route } from 'react-router-dom';
import PostList from './pages/PostList';
import  Main  from './pages/Main';
import  NotFound  from './pages/NotFound';

/*
Пример в Example.

*/

function App() {
  return (
    <>
      <NavMenu></NavMenu>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/posts" component={PostList}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </>
  );
}

export default App;
