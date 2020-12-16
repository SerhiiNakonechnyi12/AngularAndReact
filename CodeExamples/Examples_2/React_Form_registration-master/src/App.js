// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

import CheckBox from './checkbox';
import Input from './input';
// import TextArea from './text';
import Select from './select';
import Button from './button';

// Создайте регистрационную форму. Пользователь должен вводить: ник,
// электронный адрес, пол, возраст. Используйте возможности React для работы с
// формами. Используйт е React для валидации, введенных значений.

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        nik: "",
        email: "",
        age: "",
        gender: "",
        skills: []

      },

      genderOptions: ["Man", "Woman"],
      skillOptions: ["C++", "C#", "Java Script", "Azure", "Angular&React"]
    };


    this.handleAge = this.handleAge.bind(this);
    this.handleNik = this.handleNik.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /*  hook  */

  handleNik(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          nik: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }


  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        nik: "",
        email: "",
        age: "",
        gender: "",
        skills: []
      }
    });
  }

  render() {
    return (
      <div class="App">
        <img src='./Images/www.jpg'></img>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input
            inputType={"text"}
            title={"Nik:  "}
            name={"nik"}
            value={this.state.newUser.nik}
            placeholder={"Enter your nik"}
            handleChange={this.handleInput}
          />
          <br></br>
          <Input
            inputType={"text"}
            title={"Email:  "}
            name={"email"}
            value={this.state.newUser.email}
            placeholder={"Enter your email"}
            handleChange={this.handleInput}
          />
          <br></br>
          <Input
            inputType={"number"}
            name={"age"}
            title={"Age:  "}
            value={this.state.newUser.age}
            placeholder={"Enter your age"}
            handleChange={this.handleAge}
          />
          <br></br>
          <Select
            title={"Gender:  "}
            name={"gender"}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder={"Select Gender"}
            handleChange={this.handleInput}
          />
          <br></br>
          <CheckBox
            title={"Skills:"}
            name={"skills"}
            options={this.state.skillOptions}
            selectedOptions={this.state.newUser.skills}
            handleChange={this.handleCheckBox}
          />
          <br></br>
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"} 
          />

          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"} 
          />

          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
}



export default FormContainer;