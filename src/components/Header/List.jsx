
function List({className}) {
  return (
   <div className={` justify-end space-x-5  text-xl ${className}`}>
     <ul className="flex space-x-3 order-1">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
    </ul>
    <div className=" w-[25px] h-[25px] bg-black order-3 "></div>

   </div>
  )
}

export default List