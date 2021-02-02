import React from "react";
import "./ProductItems.css";
import {IoHeartOutline} from "react-icons/io5";

function ProductItems({product, setFavorite}) {

    console.log(product)
    return (

        <div className="container">
            <IoHeartOutline className="setFavoriteButton" onClick={() => setFavorite(product)}/>
        </div>
    )
}

export default ProductItems;