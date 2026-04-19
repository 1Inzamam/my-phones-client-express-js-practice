import React from "react";
import Home from "../pages/Home";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
