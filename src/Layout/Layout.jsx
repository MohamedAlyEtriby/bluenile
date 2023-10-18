import React, { useState } from "react";
import MyNavbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = ({ setcount, count, children }) => {
  const location = useLocation();

  // Check if the current path matches the path of the error page
  const excludedPaths = [
    "/Contact",
    "/About",
    "/Partitions",
    "/Events",
    "/Account",
  ];
 
  // Check if the current path is excluded
  const isExcludedPath = excludedPaths.some(
    (path) => location.pathname.includes(path) || location.pathname === "/"
  );
  console.log(location.pathname)
  return (
    <div>
      {isExcludedPath && <MyNavbar setcount={setcount} count={count} />}
      {children}
      {isExcludedPath && <Footer setcount={setcount} count={count} />}
    </div>
  );
};

export default Layout;
