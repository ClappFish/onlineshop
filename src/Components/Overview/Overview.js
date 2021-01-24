import React from "react";
import "./Overview.css";
import {Link} from "react-router-dom";
import TestImage from "../Pictures/Christmas-cactus-1-580x386.jpg";
import Header from "../Headermenu/Header";
import cart from "../Pictures/shopping-cart-outline_icon-icons.com_56126.png";

function Overview() {

    return (
        <div className="Overview">
            <div className="Header">
                <Header/>
            </div>
            <Link to="/cart">
                <img src={cart} className="IconCart" alt="cart"/>
            </Link>
            <div className="Products">
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt="img"/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt="img"/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt="img"/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt="img"/>
                </Link>
                <Link to="/product">
                    <img className="productImage" src={TestImage} alt={"img"}/>
                </Link>
            </div>
        </div>
    )
}

export default Overview;
