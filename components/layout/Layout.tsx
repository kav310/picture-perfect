import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}: any) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-1 flex flex-col p-4 mt-20">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
