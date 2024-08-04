import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
