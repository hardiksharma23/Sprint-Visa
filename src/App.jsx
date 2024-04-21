import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home"

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
