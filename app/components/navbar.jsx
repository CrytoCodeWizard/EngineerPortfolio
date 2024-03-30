// @flow strict
"use client"
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:bg-gradient-to-r lg:from-transparent lg:via-violet-950 lg:to-transparent sticky top-0 z-[1000] w-full">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Andrew Martinez
          </Link>
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {
            isOpen ? (
              <span className="text-white text-xl">
                X
              </span>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7">
                </path>
              </svg>
            )
          }
        </button>
        <ul className={`absolute md:relative md:top-auto lg:flex md:items-center md:space-x-6 bg-violet-950 rounded-lg lg:bg-transparent top-14 left-0 right-0 p-8 md:p-0 ${isOpen ? "flex" : "hidden"} flex-col md:flex-row transition duration-300 ease-in-out`}>
        {/* <ul
          className="md:flex md:flex-row hidden items-start h-screen max-h-0 w-full text-sm opacity-0 mt-4 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"> */}
        {/* <ul className={`md:hidden ${isOpen ? "flex" : "hidden"} lg:flex-row lg:flex items-start`}> */}
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#about">
              <div className="text-base text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#experience">
              <div className="text-base text-white transition-colors duration-300 hover:text-pink-600">
              EXPERIENCE
              </div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#skills">
              <div className="text-base text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#education">
              <div className="text-base text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#projects">
              <div className="text-base text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#blogs">
              <div className="text-base text-white transition-colors duration-300 hover:text-pink-600">
                BLOGS
              </div>
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href="#contact">
              <div className="text-base text-white transition-colors duration-300 hover:text-pink-600">
                CONTACT
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;