import React, {useEffect} from "react";
import axios from "axios";
import "./Favorites.css";
import {getUserId} from "../../UserIdHandler";
import Header from "../Headermenu/Header";
import TestImage from "../Pictures/Christmas-cactus-1-580x386.jpg";

function Favorites() {
    const data_api_uri = "localhost";
    const data_api_port = "8000";

    const userId = getUserId();

    const [favoriteProducts, setFavoriteProducts] = React.useState([])

    useEffect(() => {
        getFavorites()
    }, []);

    function getFavorites() {
        axios.get(`http://${data_api_uri}:${data_api_port}/${userId}/getfavorites`).then((response) => {
            setFavoriteProducts(response.data);
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
                    text="Your Favorites:"
                />
            </div>
            <div className="allProducts">
                {favoriteProducts.map(product => {
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

export default Favorites;