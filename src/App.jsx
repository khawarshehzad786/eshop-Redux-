import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/EShop/Navbar";
import ProductCard from "./components/EShop/ ProductCard";
import CartSection from "./components/EShop/CartSection";
// import Navbar from "./components/Navbar";
// import ProductCard from "./components/ProductCard";
// import CartPage from "./components/cartPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;