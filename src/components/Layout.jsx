// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
