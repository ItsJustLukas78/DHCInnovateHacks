"use client"
import NavButton from '@/components/NavButton'
import Image from 'next/image'
import React from "react";
import { Divide as Hamburger } from 'hamburger-react'


export default function Navbar() {

  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <div className="px-12 z-30 h-20 w-full fixed top-0 bg-GSGray bg-opacity-50 justify-between items-center 2xl:gap-16 xl:gap-12 md:gap-10 inline-flex bg-gradient-to-b
   from-neutral-800  to-GSGray">
        <div className="gap-2 inline-flex items-center">
          <Image src="/dhc-logo.png" alt="Logo" width="75" height="75" />
        </div>
        <div className="hidden md:inline-flex md:gap-16">
          <NavButton href="/#about">About</NavButton>
          <NavButton href="/#sponsors">Sponsors</NavButton>
          <NavButton href="/#guests">Guests</NavButton>
          <NavButton href="/#team">Team</NavButton>
          <NavButton href="/#faq">FAQ</NavButton>
        </div>
        <div className="ml-auto md:hidden">

          {/*<button*/}
          {/*    className="inline-flex items-center justify-center w-[35px] h-[35px]"*/}
          {/*    aria-label="Customise options"*/}
          {/*    onClick={() => setExpanded(!expanded)}*/}
          {/*  >*/}
          {/*    <GiHamburgerMenu className="h-6 w-6"/>*/}
          {/*  </button>*/}
          <Hamburger toggled={expanded} toggle={setExpanded} />
        </div>
      </div>
      <div className={`${expanded ? "block" : "hidden"} md:hidden`}>
        <div className="z-50 h-full w-full fixed top-20 bg-black bg-opacity-100 justify-center
         bg-gradient-to-b" >
          <div onClick={() => setExpanded(!expanded)} className="mt-5 ml-10 flex flex-col items-center gap-8">
            <NavButton href="/#about">About</NavButton>
            <NavButton href="/#sponsors">Sponsors</NavButton>
            <NavButton href="/#guests">Guests</NavButton>
            <NavButton href="/#team">Team</NavButton>
            <NavButton href="/#faq">FAQ</NavButton>
          </div>
        </div>
      </div>
    </div>
  )
}
