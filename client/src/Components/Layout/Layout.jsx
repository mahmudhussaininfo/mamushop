import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./layout.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
