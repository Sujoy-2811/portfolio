import { PiSunFill } from "react-icons/pi";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
import List from "./List";
import { useState } from "react";
import { useTheme } from "../../context/Theme";
import DropDownMenu from "../utils/DropDownMenu";

function Nav({ className }) {
  const { darkTheme, toggleTheme } = useTheme();
  const [menuShow, setMenuShow] = useState(false);
  console.log(menuShow);
  return (
    <nav
      className={` flex justify-between items-center py-1 pr-1  sm:px-4 sm:py-3 ${className}`}
    >
      {/* .Name */}
      <div className=" uppercase order-2 text-xl font-semibold sm:ml-2 sm:order-1 sm:text-3xl ">
        Sujoy
      </div>

      {/* . menu icon */}
      <button
        className={`cursor-pointer text-skin-base  text-4xl order-1  sm:hidden dark:text-white `}
      >
        <BiMenuAltLeft onClick={() => setMenuShow((prevState) => !prevState)} />
      </button>
      {menuShow && <DropDownMenu  closeMenu ={setMenuShow}/>}
      {/* nav list */}
      <List className=" hidden sm:flex sm:order-1" />

      {/* theme icon */}
      {darkTheme ? (
        <button
          className=" text-skin-base text-2xl order-3 sm:hidden  "
          onClick={() => {
            toggleTheme((value) => !value);
          }}
        >
          <BiSolidMoon />
        </button>
      ) : (
        <button
          className="text-2xl order-3 sm:hidden  "
          onClick={() => {
            toggleTheme((value) => !value);
          }}
        >
          <PiSunFill />
        </button>
      )}
    </nav>
  );
}

export default Nav;
