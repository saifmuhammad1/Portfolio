import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import PortfolioCard from './portfolioCard'
import About from './about'

function Home() {
 return(
     <><Navbar />
 
   <PortfolioCard/>
   <About/>
  </>
 )
}

export default Home