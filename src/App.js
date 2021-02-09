import React from "react";
import './App.scss';
import "./Components/UserPages/Overview/Overview";
import Profile from "./Components/UserPages/Profile/Profile";
import Overview from "./Components/UserPages/Overview/Overview";
import ProductPage from "./Components/UserPages/ProductPage/ProductPage";
import Cart from "./Components/UserPages/Cart/Cart";
import {getUserId} from "./UserIdHandler";
import {useCookies} from "react-cookie";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./Components/UserPages/LoginAndRegister/Login";
import Register from "./Components/UserPages/LoginAndRegister/Register";
import Favorites from "./Components/UserPages/Favorites/Favorites";
import Checkout from "./Components/UserPages/Checkoutpage/Checkout";
import ProductManagement from "./Components/AdminPages/ProductManagement/ProductManagement";

export function App() {

    const [login, setLogin] = React.useState(false)

    const [,setCookie,] = useCookies();

    const isVerifiedCookie = () => {
        return getUserId() !== null;
    }

    const setLoggedIn = (userIdParam) => {
        setLogin(true);
        setCookie("userId", "" + userIdParam, {path: '/'});
    }

    if (login || isVerifiedCookie()) {
        return (
            <Router>
                <Switch>
                    <Route path="/admin/productmanagement">
                        <ProductManagement/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/favorites">
                        <Favorites/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/product">
                        <ProductPage/>
                    </Route>
                    <Route path="/">
                        <Overview/>
                    </Route>
                </Switch>
            </Router>
        );
}
    else {
        return (
            <Router>
                <Switch>
                    <Route path="/reg.">
                        <Register/>
                    </Route>
                    <Route path="/">
                        <Login setLoggedIn={setLoggedIn} isVerifiedCookie={isVerifiedCookie()}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
