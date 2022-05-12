import './App.css';
import SingleInput from './components/single';
import MultipleInput from './components/multiple';
import {
  BrowserRouter,
  Link, 
  Route, 
  Switch
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <h1>Welcome to Routing</h1>
          <p>Change the URL inorder to change the route and load a new page</p>
          <p>Examples of things to add to the end of the URL:</p>
          <ul>
            <li>/(Number)</li>
            <li>/(Word)</li>
            <li>/(Word)/(Color)/(Color)</li>
          </ul>
        </div>

        <Switch>

          <Route exact path="/:id">
            <SingleInput></SingleInput>
          </Route>
          <Route exact path="/:id/:color1/:color2">
            <MultipleInput></MultipleInput>
          </Route>

        </Switch>



      </div>
    </BrowserRouter>
  );
}

export default App;
