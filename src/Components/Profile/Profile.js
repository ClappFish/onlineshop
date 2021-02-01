import React, {useState, useEffect} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";
import {getUserId} from "../../UserIdHandler";
import './Pofile.css'
import Header from "../Headermenu/Header";

function Profile(){
    const data_api_uri = "localhost";
    const data_api_port = "8085";

    const userId = getUserId();

    const [, , removeCookie] = useCookies([userId]);

    const [eMail, setEMail] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        getUserData();
    }, []);

    function Headline(props) {
        console.log(props.text);
        return <h1 className="headline">{props.text}</h1>;
    }

    function getUserData() {
        axios.get(`http://${data_api_uri}:${data_api_port}/getAccountName/${userId}`).then((response) => {
            setEMail(response.data);
        });
        axios.get(`http://${data_api_uri}:${data_api_port}/getAccountMail/${userId}`).then((response) => {
            setUserName(response.data);
        });
    }

    function logOut() {
        removeCookie("userId", {path: '/'})
        window.location.href = "/";
    }

    return (
        <div>
            <div>
                <Header/>
            </div>
            <br/>
            <br/>
            <br/>
            <Headline
                text="Account"
            />
            <div className="useroverview">
                <div className="userdatas">
                    <h3 className="userdata">Username: {userName}</h3>
                    <h3 className="userdata">E-Mail: {eMail}</h3>
                </div>
                <button className="logoutButton" onClick={logOut}>Logout</button>
            </div>
        </div>
    )
}
export default Profile;