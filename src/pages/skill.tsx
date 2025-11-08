import React from 'react'
import { skillsObject, ISkill } from '../asset/dummyOnjects/skillObject'

const SkillList = () => {
  return (
 <div className='flex flex-col bg-white dark:bg-black px-10 py-10 md:px-20 gap-4 h-3/4 ' id="Skill">
<div className="flex justify-center">
  <div className="flex flex-col items-center text-center">
    <p className="py-1 px-4 rounded-full bg-gray-600 dark:bg-gray-400 text-gray-200 w-fit">
      Skills
    </p>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      The skills, tools, and technologies I am really good at:
    </p>
  </div>
</div>

    <div className='    grid grid-cols-3 gap-4 
    md:grid-rows-2 md:grid-cols-6
   
     border-black '>
      {skillsObject.map((obj:ISkill)=>
    
    <div className=' flex flex-col items-center  gap-2 text-center  text-black dark:text-gray-200'>
        <img src={obj.img} alt={obj.name}  className='object-cover w-14 '/>
        <p>{obj.name}</p>
    </div>
    
    )}
    </div>
 </div>
  )
}

export default SkillList