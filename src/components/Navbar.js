import React, { useState } from 'react'
//import Navbar from "./components/Navbar";
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [nav,setNav]=useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
   <div>Ankur</div>
   <ul className="hidden md:flex">
   <ul className="flex">
    <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">Home</li>
    <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">About</li>
   {/* <li className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>Home </li>
   <li className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>About </li> */}
   <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">Education</li>

    <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">Portfolio</li>

    <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">Experience</li>
    <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">Contact</li>

   </ul>
   </ul>
   <div  onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
   {nav ? <FaTimes size={30} />:<FaBars size={30}/>}

   {/* // <FaBars size={30}/> */}
   </div>
 
  {nav && (

 
   <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
    <li className='px-4 cursor-pointer capitalize py-6 texr-4xl'>home</li>
    <li className='px-4 cursor-pointer capitalize py-6 texr-4xl'>About</li>
    <li className='px-4 cursor-pointer capitalize py-6 texr-4xl'>Portfolio</li>
    <li className='px-4 cursor-pointer capitalize py-6 texr-4xl'>Experience</li>
    <li className='px-4 cursor-pointer capitalize py-6 texr-4xl'>Contact</li>
   </ul>
)}

   </div>
  );
};

export default Navbar