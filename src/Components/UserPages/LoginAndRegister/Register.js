import React from "react";
import loginImg from "../../Pictures/login.svg"
import './style.scss';
import '../../../App.scss';
import axios from "axios";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import * as constUrl from "../../../UrlHandler";

function Register() {

    const data_api_uri = constUrl.data_api_uri;
    const data_api_port = constUrl.data_api_port;

    const [userName, setUserName] = React.useState("")
    const [eMail, setEMail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [,, removeCookie] = useCookies();


    function addUser() {
        removeCookie("userId", {path:'/'})
        axios.post(`http://${data_api_uri}:${data_api_port}/adduser`, {
            userName: userName,
            eMail: eMail,
            password: password,
        }).then((response) => {console.log(response)})
        alert("successfull registered");
        window.location.href = "/";
    }

    return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt={""}/>
                </div>
                <div className="form">
                    <form className="userNameInput">
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="name"
                                className="input"
                                value={userName}
                                placeholder="Your Name"
                                autoComplete="name"
                                onChange={e => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="input"
                                value={eMail}
                                placeholder="E-Mail"
                                autoComplete="email"
                                onChange={e => setEMail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="input"
                                value={password}
                                placeholder="Password"
                                autoComplete="new-password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <button className="btn" onClick={() => {addUser()}} >
                    Register
                </button>
                <p/>
            </div>
            <Link to="/" className="toLogin">Click here to Login!</Link>
        </div>
    );
}

export default Register;