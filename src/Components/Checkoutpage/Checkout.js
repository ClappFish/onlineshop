import React, {useEffect} from "react";
import "../../UrlHandler";
import "./Checkout.css";
import * as constUrl from "../../UrlHandler";
import Header from "../Navbar/Header";
import axios from "axios";
import {getUserId} from "../../UserIdHandler";

function Checkout(){
    const data_api_uri = constUrl.data_api_uri;
    const data_api_port = constUrl.data_api_port;
    const userId = getUserId();
    const [cartProducts, setCartProducts] = React.useState([])
    const [checkoutData, setCheckoutData] = React.useState("")

    useEffect(() => {
        getCheckoutData()
    }, []);

    function getCheckoutData(){
        axios.get(`http://${data_api_uri}:${data_api_port}/${userId}/getcheckoutdata`).then((response) => {
            setCheckoutData(response.data)
        })
        axios.get(`http://${data_api_uri}:${data_api_port}/${userId}/getcart`).then((response) => {
            setCartProducts(response.data);
        })
    }

    return(
        <div className="container">
            <Header/>

            <div className="allProducts">
                {cartProducts.map(product => {
                    return (
                            <h2>
                                <div key={product.productId} className="placeholderProduct">
                                <div className="productName">{product.productName}</div>
                                <div className="productPrice">{product.productPrice} €</div>
                                </div>
                            </h2>
                    )
                })}
                <h2 className="summe">
                    Summe: {checkoutData}
                </h2>
            </div>
        </div>
    )


} export default Checkout;