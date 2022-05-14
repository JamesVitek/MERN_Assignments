import logo from './logo.svg';
import './App.css';
import LukeSkywalker from './components/luke_api';
import Main from './components/main';
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
        <h1>Starwars API</h1>
          <Main></Main>
          <Route exact path = "/:category/:id">
            <LukeSkywalker></LukeSkywalker>
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
