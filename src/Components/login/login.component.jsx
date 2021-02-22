import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import './login.style.css';
import { useDispatch } from 'react-redux';
import { storeLoginData } from '../../actions/actions';

const Login = () => {

    const [email, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("");
    const dispatch = useDispatch();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const data = re.test(String(email).toLowerCase());
    
    const sendLoginData = () => {

        if (email && password) {

            if (data) {

                axios.post("http://localhost:3000/login", { email, password })
                    .then(function (response) {
                        if (response.data.hasOwnProperty("firstName")) {
                            const inHour = new Date(new Date().getTime() + response.data.maxAge * 60 * 1000);
                            console.log("Time", inHour);
                            Cookies.set('AuthToken', response.data.AuthToken, { expires: inHour })
                            console.log("response", response.data);
                            dispatch(storeLoginData(response.data));
                            history.push("/user");
                        }
                        else {
                            alert("Invalid Login Details");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

                setEmailAddress("");
                setPassword("");
            }
            else {
                alert("Please enter the valid email address!!");
                setEmailAddress("");
                setPassword("");
            }
        }

        else {
            alert("please enter the valid data!");
            setEmailAddress("");
            setPassword("");
        }
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