'use client'
import Footer from "@/components/Footer";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {motion} from 'framer-motion'
import WhatIDoCard from "@/components/WhatIDoCard";
import { PROJECTS, WHATIDO } from "@/constants/HomePageConstants";
import ProjectCard from "@/components/ProjectCard";
import AnimatedLinks from "@/components/AnimatedLinks";
import LandingPageAnimation from "@/components/LandingPageAnimation";
import ExploreSection from "@/components/ExploreSection";
import MyTechStack from "@/components/MyTechStack";
import MyProjects from "@/components/MyProjects";
import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  console.log('check');
  return (
    <>
    <LandingPageAnimation/>
    <div className="pb-10 pt-[70px] md:pt-[80px] lg:pt-[120px]">
      {/*HeroSection*/}
      <HeroSection/>
      
      {/* Second section */}
      <InfoSection/>

      {/* What I do section */}
      <WhatIDoSection/>

      {/*My Projects */}
      <MyProjects/>

      {/*My techstack*/}
      <MyTechStack/>
      
      {/*Explore me*/}
      <ExploreSection/>
    
    </div>
    </>
  );
}
