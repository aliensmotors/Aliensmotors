import { useEffect, useState } from "react";
import "./Nav.css";                   
import ProductsObj from '../.././JSONObjects/ProductsObj';   //Imports Product Details Array 
import Logo from "../../Assets/Logo/Logo.png";

import { Navigate, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

// Menu Icon SVG Function
const MenuIconSvg = () => {
return (
<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
)
}

const NavBar = () => {

const navigate = useNavigate();
// Hooks to open drawer in mobile mode
const [isOpen,setOpen] = useState(false);
// Function to Handle Menu Button Click
const HandleMenuClick = () => {
isOpen?setOpen(false):setOpen(true);
}
const ToNavigate = () => {
navigate("/Gravity");
HandleMenuClick();
}

const ToNavigateHome = () => {
  navigate("AliensWebsite/");
}

// Scroll
const [Scroll, setScroll] = useState(false);
let lastScroll = 0;
useEffect(()=>{
window.addEventListener("scroll", ()=>{
  const currentScroll = window.pageYOffset;
  if(currentScroll <= 3){
    setScroll(false);
  }
  if(currentScroll > lastScroll){
      setScroll(true);
    }
  else if(currentScroll < lastScroll){
    setScroll(false)
  }
  lastScroll = currentScroll;
})

},[])



// Nav Bar HTML 
return (
    <div>
     <nav className={`w-full bg-black  text-white fixed top-0 left-0 z-10  ease-out transition ${Scroll?'-translate-y-full':''} p-2 bg-opacity-90`}>
     <div className=" flex items-center flex-row justify-between max-w-7xl m-auto px-2">
     <div className="Logo w-10" >
      <img src={Logo}></img>
      </div>
      <div className="Menu hidden md:block lg:block">
      <ul className="flex flex-row gap-10 text-sm">
        <li className="px-2">
          <a onClick={()=> {ToNavigate()}} className="text-gray-500 hover:text-gray-200 cursor-pointer">
            Gravity
          </a>
        </li>
        <li className="px-2">
          <a className="text-gray-500 hover:text-gray-200 cursor-pointer">
            Phantom
          </a>
        </li>
        <li className="px-2">
          <a className="text-gray-500 hover:text-gray-200 cursor-pointer">
            Venom
          </a>
        </li>
      </ul>
      </div>
      <div  className="flex">
        <button onClick={HandleMenuClick} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <MenuIconSvg/>
         </button>

      </div>
     </div>
     
     </nav>
{/* Drawer (Visible in Mobile View) */}
<div className={`bg-gray-800 bg-opacity-80 md:hidden fixed h-screen w-screen z-20 ${isOpen?'':'hidden'} top-0 -right-0`}></div>
<div className={` shadow-2xl top-0 right-0 bg-white md:hidden h-screen fixed  z-30  ${isOpen?'w-9/12':'w-0'} ease-out duration-250 transition-all  overflow-x-hidden`}>
<div className="flex flex-row justify-end m-4">
<button onClick={HandleMenuClick} className="text-white">
<svg xmlns="http://www.w3.org/2000/svg" color="black" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
</div>
<ul class="flex flex-col p-4 mt-4 rounded-lg  bg-transparent">
{/* Using Map function to fetch product Name data from Product Array */}
{ProductsObj.map(function(Product){
  return (
    <li>
      <a onClick={()=> {ToNavigate()}} class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 ">{Product.Name}</a>
    </li>
  )
})} 
  </ul>
</div>
</div>


)
}

export default NavBar;