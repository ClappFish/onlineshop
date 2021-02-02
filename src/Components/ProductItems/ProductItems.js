import React from "react";
import "./ProductItems.css";
import {IoHeartOutline, IoCartOutline, IoHeartDislikeOutline} from "react-icons/io5";

function ProductItems({product, setFavorite, setUnFavorite, addToCart}) {

    console.log(product)
    return (
        <div className="container">
            <IoHeartOutline className="setFavoriteButton" onClick={() => setFavorite(product)}/>
            <IoHeartDislikeOutline className="setUnFavoriteButton" onClick={() => setUnFavorite(product)}/>
            <IoCartOutline className="addToCart" onClick={() => addToCart(product)}/>
        </div>
    )
}

export default ProductItems;