import Hamburger from '../utils/Hamburger'
import List from './List';
import { useState } from "react";

function Nav() {
  const [menuShow , setMenuShow]= useState(false);
  return (
    <nav className=" flex justify-between items-center  ">
      <div className=" uppercase order-2 text-xl sm:order-1 sm:text-3xl">Sujoy</div>
     <Hamburger  className="order-1 sm:hidden"/>
     <List className=" hidden sm:flex sm:order-1" />
      <div className=" w-[25px] h-[25px] bg-black order-3 sm:hidden"></div>
    </nav>
  );
}

export default Nav;
