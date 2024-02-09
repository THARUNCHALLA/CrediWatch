import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar';
import Table from './Table';
import SideBar from "./SideBar"

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Table/>
    <SideBar/>
    </div>
  );
}

export default App;
