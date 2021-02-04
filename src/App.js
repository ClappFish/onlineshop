import React from "react";
import './App.scss';
import "./Components/Overview/Overview";
import Profile from "./Components/Profile/Profile";
import Overview from "./Components/Overview/Overview";
import ProductPage from "./Components/ProductPage/ProductPage";
import Cart from "./Components/Cart/Cart";
import {getUserId} from "./UserIdHandler";
import {useCookies} from "react-cookie";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./Components/Startpages/Login";
import Register from "./Components/Startpages/Register";
import Favorites from "./Components/Favorites/Favorites";
import Checkout from "./Components/Checkoutpage/Checkout";

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
