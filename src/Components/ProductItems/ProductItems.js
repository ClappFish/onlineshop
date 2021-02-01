import React from "react";
import "./ProductItems.css";
import { IoHeartOutline } from "react-icons/io5";

function ProductItems({product, setFavorite}){

console.log(product)
    return(

        <div className="container">
                <button>
                    <IoHeartOutline className="setFavoriteButton" onClick={() => setFavorite(product)} />
                </button>

        </div>
    )
}
export default ProductItems;