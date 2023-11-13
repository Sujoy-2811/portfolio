import { Link } from "react-scroll";
import { navLinksData } from "../../constants/index";
import { useRef } from "react";

const DropDownMenu = ({ closeMenu }) => {
  const menuRef = useRef();

  // window.addEventListener("click", (e) => {
  //   // console.log(e.target == menuRef.current);
  //   if (e.target != menuRef.current) closeMenu(false);
  // });
  return (
    <div
      ref={menuRef}
      className="border-2 border-solid border-gray-300 absolute top-10 left-2 before: bg-skin-fill px-1 py-1 shadow-sm rounded-sm text-lg sm:hidden"
    >
      <ul className="list-none flex flex-col gap-2">
        {navLinksData.map((item) => (
          <li
            key={`${item.id}`}
            className="cursor-pointer hover:bg-skin-button-accent-hover px-3 w-28"
          >
            <Link
              onClick={() => closeMenu(false)}
              className=" "
              activeClass="active"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              // onSetActive={true}
              key={item.id}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
