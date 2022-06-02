import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/ProductDetail";
import Products from "./Components/Products";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path="/products/*" element={<Products />}>
          <Route path=":id" element={<ProductDetail />}></Route>
        </Route>
        <Route path="error" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
