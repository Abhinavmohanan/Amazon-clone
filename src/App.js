import './App.css';
import MainCarousel from './components/MainCarousel/MainCarousel';
import { NavBar } from './components/NavBar/NavBar';
import { ProductList } from './components/ProductsList/ProductList';
import {ScrollingTab} from './components/ScrollingTab/ScrollingBox/ScrollingTab'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Checkout } from './Pages/Checkout/Checkout';
import { SideBar } from './components/NavBar/SideBar';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path='/' element={<>
      <MainCarousel/>
      <ProductList/>;
      <ScrollingTab/>;</>}/>
      <Route path='cart' element={<><Checkout/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
