import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import Textform from './Components/Textform';
import Accordian from './Components/Accordian';
//import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      {/* <Navbar title="ABC" op="def"/> */}
      <Navbar title="nav" op="thisnav"/>
      <br/>
      <Accordian/>
      
    </>
  );
}

export default App;
