import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import ProductAdd from "./pages/ProductAdd";
import ProductsList from "./pages/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add-product" element={<ProductAdd />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
