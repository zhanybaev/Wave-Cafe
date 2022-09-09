import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import AddProduct from './components/AddProduct/AddProduct';
import Authorization from './components/Authorization/Authorization';
import Contact from './components/Contact/Contact';
import EditProduct from './components/EditProduct/EditProduct';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import ProductDetail from './components/ProductDetail/ProductDetail';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/authorization" component={Authorization}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/add" component={AddProduct}/>
                <Route exact path="/edit/:id" component={EditProduct}/>
                <Route exact path="/detail/:id" component={ProductDetail}/>
                <Route exact path="/about" component={AboutUs}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;