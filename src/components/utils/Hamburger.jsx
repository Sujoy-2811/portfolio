
function Hamburger({onClick , className}) {
  return (
    <>
<div className={`flex flex-col space-y-1  ${className}`} onClick={onClick}>
    <div className=" w-4 h-0 border-2 border-cyan-50 "></div>
    <div className=" w-4 h-0 border-2 border-cyan-50 "></div>
    <div className=" w-4 h-0 border-2 border-cyan-50 "></div>
  </div>
    </>
    
  )
}

export default Hamburger