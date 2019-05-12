import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

import Navbar from "./components/Navbar/Navbar";

import "./App.scss";

function App() {
    return (
        <Router>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Products} />
                    <Route path='/checkout' component={Checkout} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
