import { Dot, Github, Instagram, Linkedin, MapPin } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import userProfile from "../asset/image/WhatsApp Image 2025-11-07 at 8.40.58 AM (1).jpeg"

const PortfolioCard = () => {
  return (
<div className=' grid  grid-cols-1 md:grid-cols-3  h-fit md:h-96 items-center  px-10 py-10 md:px-20 dark:bg-black dark:text-white gap-10 md:gap-2 '>
    <div className='order-2 md:order-1 flex flex-col gap-8  md:col-span-2 col-span-1'> 
        <div className='flex flex-col gap-2'>
<p className='text-lg md:text-4xl font-bold '>Hi, I'm  Saif Muhammed👋</p>
<p className='text-gray-600 text-sm leading-relaxed tracking-normal' >I’m a Full Stack Developer with 1.9 years of experience in React.js, TypeScript, and Node.js. I specialize in building fast, responsive web applications with clean, maintainable code using Tailwind CSS. I enjoy solving real-world problems, collaborating with teams, and continually learning new technologies to enhance my skills.</p>
</div>
<div className='flex flex-col'>
<div className='text-gray-600 text-sm dark:text-white  flex gap-2'><MapPin /> <p className='items-end align-bottom'>Ernakulam ,Kerala</p></div>
<div className='text-gray-600 text-sm dark:text-white  flex gap-2'> <Dot  className='text-green-600 text-2xl'/> <p className='items-end align-bottom'>Avaliable to work</p></div>
</div>
<div className='text-gray-600 text-sm dark:text-white flex gap-2'>
    
    <a href=""><Linkedin /></a>
    <a href=""><Github /></a>
    <a href=""><Instagram /></a>
</div>

    </div>
   <div className="order-1 md:order-2 flex justify-center relative w-48 h-48 md:w-64 md:h-64 mx-auto col-span-1 ">
    <div className="absolute top-3 left-3 w-full h-full bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
    <img
      src={userProfile}
      alt="Profile"
      className="relative w-full h-full object-cover rounded-sm  shadow-md"
    />
  </div>
</div>
  )
}

export default PortfolioCard