import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.scss";

import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Products} />
                        <Route path='/checkout' component={Checkout} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
