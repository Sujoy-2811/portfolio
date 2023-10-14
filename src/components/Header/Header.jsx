import Nav from "./Nav";

function Header({ className }) {
  return <Nav className={`border-2 border-black ${className}`} />;
}

export default Header;
