import Hamburger from "../utils/Hamburger";
import List from "./List";
import { useState } from "react";

function Nav({ className }) {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <nav
      className={`flex justify-between items-center bg-purple-700 p-2  ${className}`}
    >
      <div className=" uppercase order-2 text-xl font-semibold sm:order-1 sm:text-3xl">
        Sujoy
      </div>
      <Hamburger className={`order-1  sm:hidden `} onClick={setMenuShow} />
      <List className=" hidden sm:flex sm:order-1" />
      <div className=" w-[25px] h-[25px] bg-black order-3 sm:hidden"></div>
    </nav>
  );
}

export default Nav;
