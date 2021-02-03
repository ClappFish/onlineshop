import React from "react";
import "./ProductItems.css";
import {IoHeartOutline, IoCartOutline, IoHeartDislikeOutline} from "react-icons/io5";
import {MdRemoveShoppingCart} from "react-icons/md";

function ProductItems({product, setFavorite, setUnFavorite, addToCart, deleteFromCart}) {

    console.log(product)
    return (
        <div className="container">
            <IoHeartOutline className="setFavoriteButton" onClick={() => setFavorite(product)}/>
            <IoHeartDislikeOutline className="setUnFavoriteButton" onClick={() => setUnFavorite(product)}/>
            <IoCartOutline className="addToCart" onClick={() => addToCart(product)}/>
            <MdRemoveShoppingCart className="deleteFromCart" onClick={() => deleteFromCart(product)}/>
        </div>
    )
}

export default ProductItems;