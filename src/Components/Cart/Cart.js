import React, {useEffect} from "react";
import axios from "axios";
import "./Cart.css";
import {getUserId} from "../../UserIdHandler";
import Header from "../Navbar/Header";
import TestImage from "../Pictures/Christmas-cactus-1-580x386.jpg";
import * as constUrl from "../../UrlHandler";
import {MdRemoveShoppingCart} from "react-icons/md";
import {IoHeartOutline} from "react-icons/io5";
import checkout from "../Pictures/Chekoutitem.png";
import {Link} from "react-router-dom";

function Cart() {
    const data_api_uri = constUrl.data_api_uri;
    const data_api_port = constUrl.data_api_port;

    const userId = getUserId();

    const [cartProducts, setCartProducts] = React.useState([])

    useEffect(() => {
        getCartProducts()
    }, []);


    function getCartProducts() {
        axios.get(`http://${data_api_uri}:${data_api_port}/${userId}/getcart`).then((response) => {
            setCartProducts(response.data);
        })
    }

    function Headline(props) {
        console.log(props.text);
        return <h1 className="headline">{props.text}</h1>;
    }

    const setFavorite = product => {
        axios.post(`http://${data_api_uri}:${data_api_port}/${userId}/addfavorite`, {
            ...product
        }).then(() => {
            getCartProducts()
        }).catch(() => {
        });
    }

    const deleteFromCart = product => {
        axios.post(`http://${data_api_uri}:${data_api_port}/${userId}/deletefromcart`, {
            ...product
        }).then(() => {
            getCartProducts()
        }).catch(() => {
        });
    }

    return (
        <div className="container">
            <Header/>
            <div className="Headline">
                <Headline
                    text="Your Cart:"
                />
            </div>
            <Link to="/checkout">
                <img src={checkout} className="IconCart" alt="cart"/>
            </Link>
            <div className="allProducts">
                {cartProducts.map(product => {
                        return (
                            <div key={product.productId} className="placeholderProduct">
                                <img className="productImage" src={TestImage} alt="img"/>
                                <h2 className="productData">
                                    <div className="productName">{product.productName}</div>
                                    <IoHeartOutline className="setFavoriteButton" onClick={() => setFavorite(product)}/>
                                    <MdRemoveShoppingCart className="deleteFromCart" onClick={() => deleteFromCart(product)}/>
                                    <div className="productPrice">{product.productPrice} €</div>
                                </h2>
                                <br/>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Cart;