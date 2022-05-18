import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

import AllProducts from './components/allProducts';
import NewProduct from './components/newProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path="/">
            <NewProduct></NewProduct>
            <hr/>
            <AllProducts></AllProducts>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
