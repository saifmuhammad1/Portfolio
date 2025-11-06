import { MoonStar, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const DrakModeToggleButton = () => {


    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  return (
     <><button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-none text-black  dark:text-gray-100 hidden md:block"
      >

          {darkMode ? <Sun /> : <MoonStar />}


      </button><button
          onClick={() => setDarkMode(!darkMode)}
          className="md:hidden  block  py-2 rounded-lg bg-none text-black  dark:text-gray-100  flex justify-between  "
      >

            Switch Theme  {darkMode ? <Sun /> : <MoonStar />}


          </button></>
  )
}

export default DrakModeToggleButton