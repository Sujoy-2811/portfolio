import Nav from "./nav.jsx";


export default function Header() {
  return (
       <div className=' bg-slate-600 flex m-auto w-screen px-3 pt-3  sm:px-5 sm:pt-5 h-16 justify-between items-center'>
      <h2 className=" text-3xl sm:text-6xl  ">Sujoy</h2>
      <Nav   />
    </div>
  );
}
