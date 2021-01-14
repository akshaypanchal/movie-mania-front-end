import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {useHistory} from 'react-router-dom';
import './login.style.css';

const Login = () => {

    const [email, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("");

    const sendLoginData = () => {

        axios.post("http://localhost:3000/login", { email, password })
            .then(function (response) {
                Cookies.set('AuthToken', response.data.AuthToken, {expires: response.data.maxAge})
                console.log(response.data);
                history.push("/");
            })
            .catch(function (error) {
                console.log(error);
            })

        setEmailAddress("");
        setPassword("");


    }


    const redirectToRegisterPage = () => {
        history.push("/signup");
    }

    return (
        <div className="container">
            <div className="row">
            <input className="col" onChange={(e) => setEmailAddress(e.target.value)} type="email" value={email} placeholder="Enter the Email Address" />
            </div>
            <div className="row">
            <input className="col" onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="Enter the password" />
            </div>
            <div className="row">
            <button className="btn btn-success col" onClick={() => sendLoginData()} >Login </button>
            </div>
            <div className="row">
            <button className="btn btn-success col" onClick={() => redirectToRegisterPage()} >Register</button>
            </div>
        </div>
    );
}

export default Login;