import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, SearchResult, ProductPage, Checkout} from './pages'

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
