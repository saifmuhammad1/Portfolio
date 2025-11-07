import React from 'react'
import userProfile from "../asset/image/WhatsApp Image 2025-11-07 at 8.39.10 AM (1).jpeg"
function About() {
  return (
    <div className='flex flex-col bg-gray-50 dark:bg-gray-900 px-10 py-10 md:px-20 gap-3' id="About">
      <div className='flex  justify-center'><p className=' py-1 px-3 rounded-full bg-gray-600  dark:bg-gray-400 text-gray-200 w-fit  '>About Me</p></div>
    <div className='h-screen grid  grid-cols-1 md:grid-cols-2 gap-2 items-center '>
   <div className="flex justify-center relative w-48 h-58 md:w-64 md:h-74 mx-auto col-span-1 ">
    <div className="absolute top-4 right-4 w-full h-full bg-gray-400 dark:bg-gray-700 rounded-sm"></div>
    <img
      src={userProfile}
      alt="Profile"
      className="relative w-full h-full object-cover rounded-sm  shadow-md"
    />
  </div>
      <div className=' flex flex-col gap-3'>

        <div className='text-black dark:text-white text-lg md:text-3xl font-bold '>Curious about me ? Here you have it</div>
       <p className="text-gray-600 dark:text-gray-200 text-base font-normal">
  Hey there! I’m a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">software developer</span> who loves turning ideas into smooth, interactive, and visually appealing web experiences. 
  I specialize in <span className="font-semibold">React.js, TypeScript, Node.js,</span> and <span className="font-semibold">Tailwind CSS</span>, building apps that are fast, responsive, and fun to use.
  <br /><br />
  I completed my <span className="font-semibold">B.Sc. in Information Technology</span> from Chetana College, Bandra (2022), 
  followed by an <span className="font-semibold">MCA</span> from DIST, Angamaly (2024). My studies gave me a solid technical foundation, 
  but it was through hands-on projects that I truly discovered my love for building and problem-solving.
  <br /><br />
  In 2024, I began my professional journey as a <span className="font-semibold">Software Developer</span>, creating efficient, modern web applications while constantly learning and improving. 
  I’m always exploring new technologies, refining my UI skills, and working on projects that challenge me creatively.
  <br /><br />
  When I’m not deep in code, you’ll find me exploring new tech trends, experimenting with side projects, or enjoying the little things — 
  <span className="italic">traveling and going on long bike rides</span>. Those moments recharge me and keep the creativity flowing.
  <br/>  <br/>
  One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
</p>

      </div>
    </div>
    </div>
  )
}

export default About