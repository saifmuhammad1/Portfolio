import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import PortfolioCard from "./portfolioCard";
import About from "./about";
import SkillList from "./skill";
import Experienace from "./exprienace";
import TestimonialList from "./testimonialList";
import { Footer } from "./footer";

function Home() {
  return (
    <>
      <PortfolioCard />
      <About />
      <SkillList />
      <Experienace />
      <TestimonialList />
    </>
  );
}

export default Home;
