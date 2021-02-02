import React, {useEffect} from "react";
import axios from "axios";
import "./Cart.css";
import {getUserId} from "../../UserIdHandler";
import Header from "../Headermenu/Header";
import TestImage from "../Pictures/Christmas-cactus-1-580x386.jpg";
import * as constUrl from "../../UrlHandler";

function Cart() {
    const data_api_uri = constUrl.data_api_uri;
    const data_api_port = constUrl.data_api_port;

    const userId = getUserId();

    const [cartProducts, setCartProducts] = React.useState([])

    useEffect(() => {
        getCartProducts()
    }, []);

    function getCartProducts() {
        axios.get(`http://${data_api_uri}:${data_api_port}/${userId}/getCart`).then((response) => {
            setCartProducts(response.data);
        })
    }

    function Headline(props) {
        console.log(props.text);
        return <h1 className="headline">{props.text}</h1>;
    }

    return (
        <div className="container">
            <Header/>
            <div className="Headline">
                <Headline
                    text="Your Cart:"
                />
            </div>
            <div className="allProducts">
                {cartProducts.map(product => {
                        return (
                            <div key={product.productId} className="placeholderProduct">
                                <img className="productImage" src={TestImage} alt="img"/>
                                <h2>
                                    <div className="productName">{product.productName}</div>
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