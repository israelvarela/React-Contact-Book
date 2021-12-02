import './App.css';
import ContactsList from './API/Contacts';
import ContactForm from './API/ContactForm';
// import { useForm } from "react-hook-form";
// import React, { useState } from 'react';

function App() {

 

  return (
    <div className="App">
        <ContactsList></ContactsList>
        <ContactForm></ContactForm>
    </div>
  );
}

export default App;

