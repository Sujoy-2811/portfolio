import { PiSunFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "../../context/Theme";

function List({ className }) {
  const { darkTheme, toggleTheme } = useTheme();
  const list = ["Home", "Skills", "Projects"];
  return (
    <div className={` justify-end space-x-10  text-xl  ${className}`}>
      <ul className="flex space-x-12 order-1">
        {list.map((item) => (
          <li className=" hover:text-skin-muted" key={item}>
            {item}
          </li>
        ))}
      </ul>
      {darkTheme ? (
        <button
          className=" text-skin-base text-3xl order-3 "
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
