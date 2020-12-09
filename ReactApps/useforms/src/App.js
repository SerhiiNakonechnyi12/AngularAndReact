import logo from './logo.svg';
import './App.css';
import WriterList from './WriterList';
import UserForm from './UserForm';
// import WriterList from './Writer';

function App() {
  let writers = [{name: "Kliford", surname: "Simak"}, {name: "Max", surname: "Masterman"}, {name: "Bill", surname: "Geitz"}]
  return (
    <div className="App">
      <WriterList data={writers}></WriterList>
      <hr></hr>
      <UserForm></UserForm>
      <hr></hr>
      
    </div>
  );
}

export default App;
