import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import axios from "axios";
import Viewrecipe from "./pages/Viewrecipe";
import Pagenotfound from "./pages/Pagenotfound";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/viewrecipe" element={<Viewrecipe/>}/>
        <Route path="/*" element={<Pagenotfound/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
