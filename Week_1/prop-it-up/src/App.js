import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}></Menu>
      <Menu firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"}></Menu>
      <Menu firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"}></Menu>
      <Menu firstName = {"Marla"} lastName = {"Smith"} age = {62} hairColor = {"Brown"}></Menu>
    </div>
  );
}

export default App;
