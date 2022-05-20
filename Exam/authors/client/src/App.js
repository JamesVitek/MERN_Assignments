import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import {
    BrowserRouter,
    Link,
    Route,
    Switch
} from "react-router-dom";

import AllPets from './components/allPets';
import NewPet from './components/newPet';
import OnePet from './components/onePet';
import EditPet from './components/editPet';

function App() {

  const [newPetToggle, setNewPetToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Pet Shelter</h1>
        <Switch>
          <Route exact path="/makePet">
            <NewPet newPetToggle = {newPetToggle} setNewPetToggle = {setNewPetToggle}></NewPet>
          </Route>
            <Route exact path="/">
              <AllPets newPetToggle = {newPetToggle} setNewPetToggle = {setNewPetToggle}></AllPets>
            </Route>
          <Route exact path='/viewPet/:id'>
            <OnePet></OnePet>
          </Route>
          <Route exact path='/editPet/:id'>
            <EditPet></EditPet>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
