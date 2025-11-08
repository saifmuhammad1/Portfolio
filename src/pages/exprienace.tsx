import React from 'react'
import { experienceObject, IExperience } from '../asset/dummyOnjects/experienceObject'

const Experienace = () => {
  return (
  <div className='flex flex-col bg-gray-50 dark:bg-gray-900 px-10 py-10 md:px-20 gap-4 ' id="Experience">
<div className="flex justify-center">
  <div className="flex flex-col items-center text-center">
    <p className="py-1 px-4 rounded-full bg-gray-600 dark:bg-gray-400 text-gray-200 w-fit">
      Experience
    </p>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
Here is a quick summary of my most recent experiences:
    </p>
  </div>
</div>
<div className='flex flex-row gap-2 '>
{experienceObject.map((obj:IExperience)=>(
    <div className='grid gird-col-1 md:grid-cols-3 border p-10 rounded-lg bg-white dark:bg-gray-700  gap-2'>
        <img src={obj.img} alt={obj.name}  className='object-cover w-30 '/>
        <div className='flex flex-col gap-4'>
            <div className=' flex flex-col gap-2 justify-start'>
         <p className='block md:hidden md:items-end text-gray-700 dark:text-gray-200 font-normal'>Feb 2024- Oct-2025</p>
        <p className=' text-black font-bold text-lg md:text-2xl dark:text-white'>{obj.role}</p>

       </div>
        <div className='flex flex-col gap-2 text-xs text-gray-600 dark:text-gray-200'>
          {obj.desc
        .split(".")
        .filter((line) => line.trim().length > 0) 
        .map((line, i) => (
          <p key={i}>• {line.trim()}.</p>
        ))}
        </div>
        </div>
        <div className='flex justify-end'>
             <p className='hidden md:block md:items-end text-gray-700 dark:text-gray-200 font-normal'>Feb 2024- Oct-2025</p>
        </div>
    </div>
))}
</div>
</div>
  )
}

export default Experienace