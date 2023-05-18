import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const SharedLayOut = ()=> {

   return (<>
      <Navbar/>
      <Outlet/>
   </>);

}

export default SharedLayOut;