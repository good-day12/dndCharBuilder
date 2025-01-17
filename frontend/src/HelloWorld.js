import React, { useState, useEffect } from 'react';
import axios from 'axios';



function HelloWorld() {
  const [message, setMessage] = useState('default');

  useEffect(() => {
    //so for a get request there must be a JSON object named params in order to pass JSON to backend
    axios.get('http://localhost:8000/api/hello-world/1', { params: {"test": "this is a test"} } )
      // axios.post('http://localhost:8000/api/hello-world/1', { content_params: {"test": "this is a test"} } )
      // idk what its supposed to be named for the post request.
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>!{message}!</p>
    </div>
  );
}

export default HelloWorld;