import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = "http://localhost:8000/api/"

function HelloWorld() {
  const [message, setMessage] = useState('default');

  useEffect(() => {
    //so for a get request there must be a JSON object named params in order to pass JSON to backend
    axios.get('http://localhost:8000/api/hello-world/1', { params: {"test": "I love Nicholas Glen Hosman so, so much!"} } )
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Link to="/login">Login</Link>
      <h1>Hello, World!</h1>
      <p>!{message}!</p>
        <button onClick={handleClick}>
          Click me
        </button>
    </div>
  );
}

function handleClick(){
  axios.post(baseUrl + "userName", {
    userName: "andreFlores",
    password: "password"
  })
  .then( response => {
    alert("username is " + response.data.userName)
  })
  .catch(error => {
    console.log(error)
  })
}

export default HelloWorld;