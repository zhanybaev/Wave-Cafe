import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Authorization from './components/Authorization/Authorization';
import EditProduct from './components/EditProduct/EditProduct';
import ProductDetail from './components/ProductDetail/ProductDetail';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Authorization}/>
                <Route exact path="/add" component={AddProduct}/>
                <Route exact path="/edit/:id" component={EditProduct}/>
                <Route exact path="/detail/:id" component={ProductDetail}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;