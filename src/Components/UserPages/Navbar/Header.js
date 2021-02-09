import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

function Header(){
    return(
        <div className="MainHeader">
            <div>
                <Navbar/>
            </div>
        </div>
    )
}
export default Header;