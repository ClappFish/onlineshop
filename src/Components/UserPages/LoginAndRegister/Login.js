import React from "react";
import loginImg from "../../Pictures/login.svg"
import './style.scss';
import '../../../App.scss';
import axios from "axios";
import {Link} from "react-router-dom";
import * as constUrl from "../../../UrlHandler";


function Login({setLoggedIn}) {
    const data_api_uri = constUrl.data_api_uri;
    const data_api_port = constUrl.data_api_port;

    const [eMail, setEMail] = React.useState("")
    const [password, setPassword] = React.useState("")

    function checkUser() {
        console.log(data_api_uri, data_api_port)
        axios.post(`http://${data_api_uri}:${data_api_port}/checkuser`, {
            userName: "DefaultUserName",
            eMail: eMail,
            password: password,
        }).then((response) => {
                setLoggedIn(response.data);
        }).catch(() => window.alert("Falsche Zugangsdaten"))
    }

    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt={""}/>
                </div>
                <div className="form">
                    <form className="userNameInput">
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="input"
                                value={eMail}
                                placeholder="Enter email"
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
                                autoComplete="current-password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <button className="btn" onClick={() => {checkUser()}} >
                    Login
                </button>
                <p/>
                <p/>
            </div>
            <Link to="/reg." className="toRegister">Click here to Register!</Link>
        </div>
    );
}

export default Login;