import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

import AllProducts from './components/allProducts';
import NewProduct from './components/newProduct';
import OneProduct from './components/oneProduct';
import EditProduct from './components/editProduct';

function App() {

  const [newProductToggle, setNewProductToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path="/">
            <NewProduct newProductToggle = {newProductToggle} setNewProductToggle = {setNewProductToggle}></NewProduct>
            <hr/>
            <AllProducts newProductToggle = {newProductToggle} setNewProductToggle = {setNewProductToggle}></AllProducts>
          </Route>
          <Route exact path='/viewProduct/:id'>
            <OneProduct></OneProduct>
          </Route>
          <Route exact path='/editProduct/:id'>
            <EditProduct></EditProduct>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
