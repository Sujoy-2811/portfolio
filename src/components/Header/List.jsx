import { PiSunFill } from "react-icons/pi";
import { useTheme } from "../../context/theme";

function List({ className }) {
  const { toggleTheme } = useTheme();
  return (
    <div className={` justify-end space-x-10  text-xl${className}`}>
      <ul className="flex space-x-7 order-1">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
      <PiSunFill
        className="cursor-pointer text-3xl order-3 "
        onClick={() => {
          toggleTheme((value) => !value);
        }}
      />
    </div>
  );
}

export default List;
