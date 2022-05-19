import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

import AllAuthors from './components/allAuthor';
import NewAuthor from './components/newAuthor';
import OneAuthor from './components/oneAuthor';
import EditAuthor from './components/editAuthor';

function App() {

  const [newAuthorToggle, setNewAuthorToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path="/makeAuthor">
            <NewAuthor newAuthorToggle = {newAuthorToggle} setNewAuthorToggle = {setNewAuthorToggle}></NewAuthor>
          </Route>
            <Route exact path="/">
              <AllAuthors newAuthorToggle = {newAuthorToggle} setNewAuthorToggle = {setNewAuthorToggle}></AllAuthors>
            </Route>
          <Route exact path='/viewAuthor/:id'>
            <OneAuthor></OneAuthor>
          </Route>
          <Route exact path='/editAuthor/:id'>
            <EditAuthor></EditAuthor>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
