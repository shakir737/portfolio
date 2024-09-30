'use client'

import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
    scrollToEducation: () => void;
    scrollToExperience: () => void;
    scrollToProjects: () => void;
    scrollToContacts: () => void;
  }
  
  const Navbar = ({ 
    scrollToEducation, 
    scrollToExperience, 
    scrollToProjects, 
    scrollToContacts 
  }: NavbarProps) => {
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false);
    }

  return (
    <div
    className={` ${
      isSticky
        ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
        : ""
    }`}
  >
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
             <div onClick={scrollToEducation} className="hover:text-gray-50">EDUCATION</div>
          <div onClick={scrollToExperience} className="hover:text-gray-50">EXPERIENCE</div>

          <div onClick={scrollToProjects} className="hover:text-gray-50">PROJECTS</div>
          <div onClick={scrollToContacts} className="hover:text-gray-50">CONTACTS</div>


         
        </div>

        {/* <div className="flex md:hidden">
            {isDropDownVisible ? (
                // display an x icon when the drop is visible
                <div 
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
                >
                    <X />
                    <DropDownMenu onClose={closeDropDown} />
                    </div>
            ) : (
                <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
                />
            )}

        </div> */}

        <div className="hidden md:flex">
           
        </div>

      </div>
    </div>
  );
};

export default Navbar;
