import React, { useEffect, useState } from 'react'
import logoImg from "../asset/image/unnamed.jpg"
import { ArrowDownToLine, MoonStar, Sun } from 'lucide-react';
import MobileNavbarDrawer from './mobileNavbarDrawer';
import DrakModeToggleButton from '../components/drakModeToggleButton';


function Navbar() {
const scrollToSection = (id:string) => { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: "smooth" }); } };

  return (

    <nav className='bg-white text-black dark:bg-black  flex justify-between mdd:px-10 px-4 py-2'>


      <div className='flex  items-center space-x-2 '>

        <img src={logoImg} alt="s" className='w-10 rounded-full' />
        <p className='text-2xl dark:text-white text-black'>SM</p>
      </div>

    <div className='hidden   md:flex space-x-2 items-center gap-2 text-gray-600  '>
      <div className='flex gap-12'>

      <button onClick={() => scrollToSection("About")} className="" > About </button>
        <a href="">Work</a>
          <a href="">Testimonial</a>
            <a href="">Contact</a>
      </div>
   <DrakModeToggleButton/>
               <button
className='bg-black text-white dark:bg-white dark:text-black rounded-xl flex gap-3 p-2'
         >
        <ArrowDownToLine />
        Resume
         </button>
         
      </div>


<div className='block md:hidden'>
      <MobileNavbarDrawer/>
      </div>



    </nav>
  );
}

export default Navbar