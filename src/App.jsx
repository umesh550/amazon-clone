// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";

import "./Server";
const App = () => {
  return (
    <div className="bg-AmazonClone-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
