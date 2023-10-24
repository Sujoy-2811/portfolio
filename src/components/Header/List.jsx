import { Link } from "react-scroll";

import { PiSunFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "../../context/Theme";
import { navLinksData } from "../../constants/index";

function List({ className }) {
  const { darkTheme, toggleTheme } = useTheme();
  const list = ["Home", "Skills", "Projects"];
  return (
    <div className={` justify-end space-x-10  text-xl  ${className}`}>
      <ul className="flex space-x-12 order-1">
        {navLinksData.map((item) => (
          <Link
            className=" hover:text-skin-muted"
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={true}
            key={item.id}
          >
            {item.title}
          </Link>
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
