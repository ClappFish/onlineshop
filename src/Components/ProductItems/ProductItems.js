import React from "react";
import "./ProductItems.css";
import {IoHeartOutline, IoCartOutline, IoHeartDislikeOutline} from "react-icons/io5";

function ProductItems({product, setFavorite, setUnFavoite, addToCart}) {

    console.log(product)
    return (
        <div className="container">
            <IoHeartOutline className="setFavoriteButton" onClick={() => setFavorite(product)}/>
            <IoCartOutline className="addToCart" onClick={() => addToCart(product)}/>
            <IoHeartDislikeOutline className="setUnFavoriteButton" onClick={() => setUnFavorite(product)}/>
        </div>
    )
}

export default ProductItems;