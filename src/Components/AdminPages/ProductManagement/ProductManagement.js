import React from "react";
import "./ProductManagement.css"
import Header from "../../UserPages/Navbar/Header"
import * as constUrl from "../../../UrlHandler";
import axios from "axios";

function ProductManagement(){

    const data_api_uri = constUrl.data_api_uri;
    const data_api_port = constUrl.data_api_port;

    const [productName, setProductName] = React.useState("")
    const [productPrice, setProductPrice] = React.useState("")


    function addProduct(){
        axios.post(`http://${data_api_uri}:${data_api_port}/admin/addProduct`,{
            productName: productName,
            productPrice: productPrice,
        }).then((response) => {console.log(response)})
    }

    return(
        <div className="ProductManagementContainer">
            <div className="Header">
                <Header/>
            </div>
            <div className="form">
                <form>
                    <div className="form-group">
                        <label>ProductName</label>
                        <input
                            type="text"
                            className="input"
                            value={productName}
                            placeholder="Product Name: "
                            onChange={e => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>ProductPrice</label>
                        <input
                            type="text"
                            className="input"
                            value={productPrice}
                            placeholder="Product Name: "
                            onChange={e => setProductPrice(e.target.value)}
                        />
                    </div>
                </form>
                <button className="addProduct" onClick={() => {addProduct()}}>
                    Add the Product
                </button>
            </div>
        </div>
    )
}

export default ProductManagement;