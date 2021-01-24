import React from "react";
import './App.css';
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
import Login from "./Components/Login/Login";
import Registration from "./Components/Login/Registration";

function App() {

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
                    <Route path="/product">
                        <ProductPage/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/">
                        <Overview/>
                    </Route>
                </Switch>
            </Router>
        )}
    else {
            return (
            <Router>
                <Switch>
                    <Route path="/reg.">
                        <Registration/>
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
