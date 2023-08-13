import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="my-8 container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <Sidebar />
        <div className="md:flex hidden"></div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
