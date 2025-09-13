import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
//Routear de forma declarativa
function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
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
              index
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
              element={<AppLayout />}>
              <Route
                index
                element={
                  <Navigate
                    replace
                    to='cities'
                  />
                }
              />
              <Route
                path='cities/:id'
                element={<City />}
              />

              <Route
                path='cities'
                element={<CityList />}
              />
              <Route
                path='countries'
                element={<CountryList />}
              />
              <Route
                path='form'
                element={<Form />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
