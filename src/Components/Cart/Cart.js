import React from "react";
import Header from "../Headermenu/Header";
import "./Cart.css";

function Cart() {

    return (
        <div className="cart">
            <div className="Header">
                <Header/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="cartContent">
                <h1 className="cartTitle">Your Cart</h1>
            </div>
        </div>
    )
}

export default Cart;