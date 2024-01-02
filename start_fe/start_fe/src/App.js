import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';


async function getData() {
  console.log("sending again...")
  const data = {
    firstName: "burim",
    lastName: "Ismaili",
    email: "my_email@gmail.com",
    profileImg: "base64String_Image"
  }
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  // const result = await response.json();
  console.log(response);
};

function App() {

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
