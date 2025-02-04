import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api/"

function LoginPage(){


    return (
        <div>
            <h1>this is the login page</h1>
            <form method="post" onSubmit={handleSubmit}>
                <label>Username: <input name="userName" /></label>
                <label>Password: <input name="Password" /></label>
                <button type="submit">Submit form</button>
            </form>
        </div>
    )
}

function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    axios.post(baseUrl + "userName", form)
    .then(response => {
        alert(response.data.userName)
    })
}

//     // Or you can work with it as a plain object:
//     const formJson = Object.fromEntries(formData.entries());
//     console.log(formJson);


export default LoginPage;