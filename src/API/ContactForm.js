import React, { Component } from "react";
import axios from "axios";


const initialState = {
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
  firstNameError:"",
  lastNameError:"",
  emailError:""
 
}

class ContactForm extends Component {

  state = initialState;

  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      firstNameError:"",
      lastNameError:"",
      emailError:""
     
    };
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

 validate = () => {
  let firstNameError= "";
  let lastNameError= "";
  let emailError= "";

  if (!this.state.firstName) {
    firstNameError = "required"
  }

  if (!this.state.lastName) {
    lastNameError = "required"
  }
   
  if (!this.state.email.includes('@')) {
    emailError = 'invalid email'
  }

  if (emailError || firstNameError || lastNameError) {
    this.setState({emailError, firstNameError, lastNameError});
    return false;
  }  

  return true;
 };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form 
      this.setState(initialState)

    }

    

    axios
      .post("https://avb-contacts-api.herokuapp.com/contacts", this.state)
      .then((response) => {
        console.log(response);
      });
    
  };

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>FirstName</label>
            <input
              type="text"
              name="firstName"
              placeholder="first Name"
              value={firstName}
              onChange={this.handleChange}
              
            ></input>
            <div style={{ fontSize: 12, color: "red"}}>{this.state.firstNameError}</div>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="last Name"
              value={lastName}
              onChange={this.handleChange}
            ></input>
            <div style={{ fontSize: 12, color: "red"}}>{this.state.lastNameError}</div>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={this.handleChange}
            ></input>
            <div style={{ fontSize: 12, color: "red"}}>{this.state.emailError}</div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
