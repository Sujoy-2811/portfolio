import { PiSunFill } from "react-icons/pi";
import { BiMenuAltLeft } from "react-icons/bi";
import List from "./List";
import { useState } from "react";

function Nav({ className }) {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <nav className={`flex justify-between items-center pr-1  ${className}`}>
      <div className=" uppercase order-2 text-xl font-semibold sm:ml-2 sm:order-1 sm:text-3xl">
        Sujoy
      </div>
      <BiMenuAltLeft
        className={`cursor-pointer text-black  text-4xl order-1  sm:hidden `}
        onClick={setMenuShow}
      />
      <List className=" hidden sm:flex sm:order-1" />
      <PiSunFill className=" cursor-pointer text-2xl order-3 sm:hidden" />
    </nav>
  );
}

export default Nav;
