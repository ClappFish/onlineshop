import React, {useEffect} from "react";
import "./Overview.css";
import {Link} from "react-router-dom";
import TestImage from "../Pictures/Christmas-cactus-1-580x386.jpg";
import Header from "../Headermenu/Header";
import {getUserId} from "../../UserIdHandler";
import cart from "../Pictures/shopping-cart-outline_icon-icons.com_56126.png";
import axios from "axios";
import { IoHeartOutline } from "react-icons/io5";

function Overview() {

    const data_api_uri = "localhost";
    const data_api_port = "8080";

    const userId = getUserId();

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        getProductData();
    }, []);

    function getProductData() {
        axios.get(`http://${data_api_uri}:${data_api_port}/getProducts`).then((response) => {
            setProducts(response.data);
        });
    }

    const setFavorite = index => {
        const favoriteProducts = [...products];
        // eslint-disable-next-line array-callback-return
        favoriteProducts.map((product) => {
            if (index === product.id){
                axios.post(`http://${data_api_uri}:${data_api_port}/addfavorite/${userId}/${product.id}`, {
                    productId: product.id,
                    isFavorite: true,
                    isInCart: product.isInCart,
                }).then(() => {
                    getProductData();
                }).catch(() => {
                });
            }
        })
    }

    const addToCart = index => {
        const cartProducts = [...products];
        // eslint-disable-next-line array-callback-return
        cartProducts.map((product) => {
            if (index === product.id){
                axios.post(`http://${data_api_uri}:${data_api_port}/addtocart/${userId}/${product.id}`,{
                    productId: product.id,
                    isFavorite: product.isFavorite,
                    isInCart: true
                })
            }
        })
    }

    return (
        <div className="Overview">
            <div className="Header">
                <Header/>
            </div>
            <Link to="/cart">
                <img src={cart} className="IconCart" alt="cart"/>
            </Link>
            <div className="allProducts">
                {products.map(product => {
                        return (
                            <>
                                <div className="placeholderProduct">
                                    <a>
                                        <Link to="/product">
                                            <img className="productImage" src={TestImage} alt="img"/>
                                        </Link>
                                        <h2><div className="productName">{product.productName}</div>
                                            <IoHeartOutline onClick={() => setFavorite()}/>
                                            <div className="productPrice">{product.productPrice} €</div> </h2>
                                    <br/>
                                    </a>
                                </div>
                            </>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Overview;
