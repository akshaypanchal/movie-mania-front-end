import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


const Login = () => {

    const [email, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const sendLoginData = () => {

        axios.post("http://localhost:3000/login", { email, password })
            .then(function (response) {
                Cookies.set('AuthToken', response.data.AuthToken, {expires: response.data.maxAge})
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

        setEmailAddress("");
        setPassword("");


    }

    return (
        <div className="mb-3 container">
            <label className="form-label" >Email:</label>
            <input onChange={(e) => setEmailAddress(e.target.value)} type="email" value={email} placeholder="Enter the Email Address" />
            <label className="form-label" >Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="Enter the password" />
            <button className="btn btn-success" onClick={() => sendLoginData()} >Login </button>
        </div>
    );
}

export default Login;