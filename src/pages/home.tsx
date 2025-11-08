import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import PortfolioCard from './portfolioCard'
import About from './about'
import SkillList from './skill'
import Experienace from './exprienace'

function Home() {
 return(
     <><Navbar />
   <PortfolioCard/>
   <About/>
   <SkillList/>
   <Experienace/>
  </>
 )
}

export default Home