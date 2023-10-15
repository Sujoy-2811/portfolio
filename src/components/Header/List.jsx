import { PiSunFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "../../context/Theme";

function List({ className }) {
  const { darkTheme, toggleTheme } = useTheme();
  return (
    <div className={` justify-end space-x-10  text-xl${className}`}>
      <ul className="flex space-x-7 order-1">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
      {darkTheme ? (
        <button
          className=" text-white  text-3xl order-3 "
          onClick={() => {
            toggleTheme((value) => !value);
          }}
        >
          <BiSolidMoon />
        </button>
      ) : (
        <button
          className="text-3xl order-3 "
          onClick={() => {
            toggleTheme((value) => !value);
          }}
        >
          <PiSunFill />
        </button>
      )}
    </div>
  );
}

export default List;
