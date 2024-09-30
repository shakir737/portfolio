"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";

import WebsiteDesign from "./website-design";
import Experience from "./experience";
import Education from "./education";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { useRef } from "react";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import Contacts from "./contacts";

export default function Home() {

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };


  const EducationRef = useRef<HTMLDivElement>(null);
  const ExperienceRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const ContactsRef = useRef<HTMLDivElement>(null);
  
  const scrollToEducation = () => {
    EducationRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", });
  }
  
  const scrollToExperience = () => {
    ExperienceRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToProjects = () => {
    ProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToContacts = () => {
    ContactsRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  
  



  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToEducation={scrollToEducation}
        scrollToExperience={scrollToExperience}
        scrollToProjects={scrollToProjects}
        scrollToContacts={scrollToContacts}



      />

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          SHAKIR RAZA <br /> 
        </div>
        <div
          className="text-3xl pb-5 md:text-4xl px-6 text-center  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          MERN STACK AND NEXT JS DEVELOPER
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
         I am a software engineer specializing in building and ocasionaly designing the web applications.
        </p>

        <Link
          href={"/"}
          className="cursor-pointer 
          flex items-center 
          justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Check My CV
        </Link>

         <div className="w-full pt-20">
          {/* <SliderOne /> */}
          </div> 
          <div ref={EducationRef} className="pt-20">
          <Education />
        </div>
       <div className="pt-20"></div>
    <div className="pt-20" ref={ExperienceRef}>

        <Experience />
        </div>

        <div ref={ProjectsRef}>
        
        </div>
         <div ref={ContactsRef}>
         <Contacts />
         </div>
         <div className="pt-20">
         <FAQS />
         </div>
        
  
      </div>
    </div>
  );
}
