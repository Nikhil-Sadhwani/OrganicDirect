import "./App.css";
import CropDetails from "./components/CropDetails";
import Crops from "./components/Crops";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockDetails from "./components/StockDetails";
import CropsContentState from "./Context/cropsContent/CropsContentState";
import AboutUs from "./components/AboutUs";
import Registerationform from "./components/sellerComponents/Registerationform";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SellingForm from "./components/sellerComponents/SellingForm";

function App() {
  return (
    <>
      <CropsContentState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/crops/:season' element={<Crops/>}/>
            <Route exact path='/crop/:cropname' element={<CropDetails/>}/>
            <Route exact path='/stocks' element={<StockDetails/>}/>
            <Route exact path='/aboutus' element={<AboutUs/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>

            <Route exact path='/sellcrop' element={<SellingForm/>}/>

            {/* <Route exact path='/' element={<Registerationform/>}/> */}

          </Routes>
        </BrowserRouter>
      </CropsContentState>
    </>
  );
}

export default App;
