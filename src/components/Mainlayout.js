import React from "react";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Mainlayout = ({ children }) => {

  return (
    <div>
      <Navbar />
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
