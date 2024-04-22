import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home"
import GetVisa from "./Pages/GetVisa";

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/GetVisa" element={<GetVisa/>}/>
      </Routes>
    </div>
  );
}

export default App;
