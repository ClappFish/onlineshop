import React from "react";
import "./ProductItems.css";
import {IoHeartOutline, IoCartOutline} from "react-icons/io5";

function ProductItems({product, setFavorite, addtocart}) {

    console.log(product)
    return (

        <div className="container">
            <IoHeartOutline className="setFavoriteButton" onClick={() => setFavorite(product)}/>
            <IoCartOutline className="addToCart" onClick={() => addtocart(product)}/>
        </div>
    )
}

export default ProductItems;