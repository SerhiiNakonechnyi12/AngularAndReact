import logo from './logo.svg';
import './App.css';
import WriterList from './WritersList';
import UserForm from './UserForm';
import UserFormWithRefs from './UserFormWithRefs';
import UserFormValidation from './UserFormWalidation';
import FeedbackForm from './FeedbackForm';

function App() {
  let writers = [{name: "Клиффорд", surname: "Саймак"}, {name: "Джордж", surname: "Оруэлл"}, {name: "Джозеф", surname: "Хеллер"}]
  return (
    <div className="App">
      <WriterList data={writers}></WriterList>
      {/* <UserForm></UserForm> */}
      <hr></hr>
      {/* <UserFormWithRefs></UserFormWithRefs> */}
      {/* <UserFormValidation></UserFormValidation> */}
      <FeedbackForm></FeedbackForm>
    </div>
  );
}

export default App;
