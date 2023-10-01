import "./App.css";
import CropDetails from "./components/CropDetails";
import Crops from "./components/Crops";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockDetails from "./components/StockDetails";
import CropsContentState from "./Context/cropsContent/CropsContentState";
import AboutUs from "./components/AboutUs";
import FarmerList from "./components/admin/FarmerList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SellingForm from "./components/sellerComponents/SellingForm";
import AllInventory from "./components/admin/AllInventory";
import StockSell from "./components/admin/StockSell";
import ProfitOfStock from "./components/admin/ProfitOfStock";
import LogState from "./Context/logInOut/LogState";
import AlertState from "./Context/alert/AlertState";

function App() {
  return (
    <>
    <AlertState>

    <LogState>

      <CropsContentState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<AboutUs/>}/>

            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>

            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/crops/:season' element={<Crops/>}/>
            <Route exact path='/crop/:cropname' element={<CropDetails/>}/>
            <Route exact path='/stocks/:id' element={<StockDetails/>}/>

            <Route exact path='/sellcrop' element={<SellingForm/>}/>

            <Route exact path='/farmerlist' element={<FarmerList/>}/>
            <Route exact path='/allinventory' element={<AllInventory/>}/>
            <Route exact path='/sellinform' element={<StockSell/>}/>
            <Route exact path='/profitlist/:crop' element={<ProfitOfStock/>}/>
          

          </Routes>
        </BrowserRouter>
      </CropsContentState>
    </LogState>
    </AlertState>
    </>
  );
}

export default App;
