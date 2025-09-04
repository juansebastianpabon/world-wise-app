import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

//Routear de forma declarativa
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='product'
          element={<Product />}
        />

        <Route
          path='pricing'
          element={<Pricing />}
        />
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />

        <Route
          path='app'
          element={<AppLayout />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
