import PropTypes from 'prop-types';

export default function Nav({className =""}) {
  const navList = ['Home', 'About', 'Skills', 'Work', 'Contact'];
  return (
    <ul className={`list-none flex justify-end ${className} `}>
      {navList.map( item => <li className="pr-5 hidden  hover:text-[aqua]       after:content-[' sfdf'] after:block after:h-1 after:w-[100%] after:bg-[#2bd576] after:scale-x-0 after:origin-left  hover:after:content-[''] hover:after:scale-x-100 sm:inline " key={item}>{item} </li>)}
      {/*  icon for dark mode */}
      <ul><div className=' bg-white  h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]'></div></ul>
    </ul>
  );
}

Nav.propTypes = {
  className : PropTypes.string
}