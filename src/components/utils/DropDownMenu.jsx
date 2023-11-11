import { Link } from "react-scroll";
import { navLinksData } from "../../constants/index";

const DropDownMenu = () => {
  return (
    <div className="border-2 border-solid border-gray-300 absolute top-10 left-1 bg-skin-fill px-4 py-1 rounded-sm text-lg sm:hidden">
      <ul className="list-none flex flex-col gap-2">
        {navLinksData.map((item) => (
          <li key={`${item.id}`}>
            <Link
              className=" hover:text-skin-muted"
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
