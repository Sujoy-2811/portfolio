import PropTypes from 'prop-types';

export default function Nav({className =""}) {
  const navList = ['Home', 'About', 'Skills', 'Work', 'Contact'];
  return (
    <ul className={`list-none flex justify-between ${className} `}>
      {navList.map( item => <li className="pl-5  hover:text-[aqua]       after:content-[' sfdf'] after:block after:h-1 after:w-[100%] after:bg-[#2bd576] after:scale-x-0 after:origin-left  hover:after:content-[''] hover:after:scale-x-100 " key={item}>{item} </li>)}
      
    </ul>
  );
}

Nav.propTypes = {
  className : PropTypes.string
}