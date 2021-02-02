import React, {useEffect} from "react";
import "./Overview.css";
import {Link} from "react-router-dom";
import TestImage from "../Pictures/Christmas-cactus-1-580x386.jpg";
import Header from "../Headermenu/Header";
import {getUserId} from "../../UserIdHandler";
import cart from "../Pictures/shopping-cart-outline_icon-icons.com_56126.png";
import axios from "axios";
import ProductItems from "../ProductItems/ProductItems";
import * as constUrl from "../../UrlHandler";

function Overview() {

    const data_api_uri = constUrl.data_api_uri;
    const data_api_port = constUrl.data_api_port;

    const userId = getUserId();

    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        getProductData();
    }, []);

    function getProductData() {
        axios.get(`http://${data_api_uri}:${data_api_port}/getProducts`).then((response) => {
            setProducts(response.data);
            console.log(response.data + "= favorite");
        });
    }

    const setFavorite = product => {
        axios.post(`http://${data_api_uri}:${data_api_port}/${userId}/addfavorite`, {
            ...product
        }).then(() => {
            getProductData();
        }).catch(() => {
        });
    }

    const setUnFavorite = product => {
        axios.post(`http://${data_api_uri}:${data_api_port}/${userId}/unfavorite`, {
            ...product
        }).then(() => {
            getProductData()
        }).catch(() => {
        });
    }

    const addToCart = product => {
        axios.post(`http://${data_api_uri}:${data_api_port}/${userId}/addtocart`,{
            ...product
        }).then(() => {
            getProductData();
        }).catch(() => {
        });
    }


    /*
        const unFavorite = index => {
            const favoriteProducts = [...products];
            // eslint-disable-next-line array-callback-return
            favoriteProducts.map((product) => {
                if (index === product.id) {
                    axios.post(`http://${data_api_uri}:${data_api_port}/unfavorite/${userId}/${product.id}`, {
                        productId: product.id,
                        isFavorite: false,
                        isInCart: product.isInCart,
                    }).then(() => {
                        getProductData();
                    }).catch(() => {
                    });
                }
            })
        }


        const deleteFromCart = index => {
            const cartProducts = [...products];
            // eslint-disable-next-line array-callback-return
            cartProducts.map((product) => {
                if (index === product.id) {
                    axios.post(`http://${data_api_uri}:${data_api_port}/deletefromcart/${userId}/${product.id}`, {
                        productId: product.id,
                        isFavorite: product.isFavorite,
                        isInCart: false,
                    }).catch(() => {
                    });
                }
            })
        }
    */

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
                            <div key={product.productId} className="placeholderProduct">
                                <Link to="/product">
                                    <img className="productImage" src={TestImage} alt="img"/>
                                </Link>
                                <h2>
                                    <div className="productName">{product.productName}</div>
                                    <ProductItems
                                        product={product}
                                        setFavorite={setFavorite}
                                        addToCart={addToCart}
                                        setUnFavoite={setUnFavorite}
                                    />
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

export default Overview;