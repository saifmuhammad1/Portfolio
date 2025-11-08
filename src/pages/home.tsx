import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import PortfolioCard from './portfolioCard'
import About from './about'
import SkillList from './skill'

function Home() {
 return(
     <><Navbar />
 
   <PortfolioCard/>
   <About/>
   <SkillList/>
  </>
 )
}

export default Home