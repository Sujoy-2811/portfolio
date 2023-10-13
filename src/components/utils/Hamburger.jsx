import { useState } from "react"

function Hamburger({onClick , className}) {
  const [menuShow , setMenuShow] = useState(false);
  return (
    <>
<div className={`flex flex-col space-y-1 ${ menuShow ? "hidden" : ""}  ${className}`} onClick={()=>onClick((e) => !e)}>
    <div className=" w-4 h-0 border-2 border-cyan-50 "></div>
    <div className=" w-3 h-0 border-2 border-cyan-50 "></div>
    <div className=" w-2 h-0 border-2 border-cyan-50 "></div>
    
  </div>
    </>
    
  )
}

export default Hamburger