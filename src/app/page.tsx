"use client"
import Image from 'next/image'
import Link from 'next/link'
import DHCColorGradient from "@/components/DHCColorGradient";
import { FiExternalLink } from 'react-icons/fi'
import PersonIcon from "@/components/PersonIcon";
import Sponsor from "@/components/Sponsor";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


export default function Home() {
  return (
    <main>
      <div className="xs:my-52 my-44 flex w-full flex-col items-center justify-center self-center gap-60">
        <div className="w-[80%] flex h-auto flex-col">
          <DHCColorGradient
            className="sm:h-[90px] sm:w-[545px] xs:h-[50px] xs:w-[380px] h-[40px] w-[230px] mb-3"
          >
            <h2 className="sm:text-7xl xs:text-5xl text-3xl font-bold text-center absolute">Innovate Hacks</h2>
          </DHCColorGradient>
          <p className="sm:text-2xl text-xl">
            October 15 - 25, 2023
          </p>
          <p className="sm:text-2xl text-xl">
            Dublin High School
          </p>
          {/*Join Button*/}
          <a
            className="pl-0.5 opacity-100 duration-200 transition-colors lg:text-lg xl:text-xl"
            target="_blank"
            rel="noopener"
            href={"https://innovate-hacks.devpost.com/"}
          >
            <DHCColorGradient
              className="h-[40px] w-[190px] group hover:w-[260px] mt-5"
            >
              <div className="flex flex-row absolute items-center justify-center gap-2">
                <h1
                  className="transition-all sm:text-2xl text-xl font-bold text-center sm:group-hover:text-3xl"
                >
                  Get Hacking!
                </h1>
                <FiExternalLink className="h-6 w-6 pb-0.5" />
              </div>
            </DHCColorGradient>
          </a>
        </div>
        {/*About*/}
        <div id="about" className="w-[80%] flex h-auto flex-col scroll-mt-20 mt-56 items-center">
          <div className="flex flex-col max-w-[800px]">
            <h2 className="sm:text-5xl text-4xl font-medium mb-10 text-center">About</h2>
            <div className="flex flex-col gap-3">
              <p className="text-xl font-light">
                &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xl font-light">
                &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <p className="text-xl font-light">
                &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        {/*Sponsors*/}
        <div id="sponsors" className="w-[80%] flex h-auto flex-col scroll-mt-20 items-center">
          <h2 className="sm:text-5xl text-4xl font-medium mb-10 text-center">Sponsors</h2>
          <div className="flex flex-row flex-wrap justify-center items-center sm:gap-8 gap-14">
            <Sponsor
              name="Google"
              imageLink="https://placehold.co/100x100"
              href="https://www.google.com"
            />
            <Sponsor
              name="Apple"
              imageLink="https://placehold.co/100x100"
              href="https://www.apple.com"
            />
            <Sponsor
              name="Tesla"
              imageLink="https://placehold.co/100x100"
              href="https://www.tesla.com"
            />
          </div>
        </div>
        {/*Guests*/}
        <div id="guests" className="w-[80%] flex h-auto flex-col scroll-mt-20 items-center">
          <div className="flex flex-col max-w-[500px]">
            <h2 className="sm:text-5xl text-4xl font-medium mb-10 text-center">Guests</h2>
            <div className="flex flex-row flex-wrap justify-center items-center sm:gap-8 gap-14">
              <PersonIcon
                name="John Doe"
                occupation="CEO of Google"
                imageLink="https://i.pravatar.cc/300"
                href="https://www.google.com"
              />
              <PersonIcon
                name="Jane Doe"
                occupation="CEO of Google"
                imageLink="https://i.pravatar.cc/300"
                href="https://www.google.com"
              />
              <PersonIcon
                name="Juh Doe"
                occupation="CEO of Google"
                imageLink="https://i.pravatar.cc/300"
                href="https://www.google.com"
              />
            </div>
          </div>
        </div>
        {/*Team*/}
        <div id="team" className="w-[80%] flex h-auto flex-col scroll-mt-20 items-center">
          <h2 className="sm:text-5xl text-4xl font-medium mb-10 text-center">Team</h2>
          <div className="flex flex-row flex-wrap justify-center items-center sm:gap-8 gap-14">
            <PersonIcon
              name="John Doe"
              occupation="CEO of Google"
              imageLink="https://i.pravatar.cc/300"
              href="https://www.google.com"
            />
            <PersonIcon
              name="Jane Doe"
              occupation="CEO of Google"
              imageLink="https://i.pravatar.cc/300"
              href="https://www.google.com"
            />
            <PersonIcon
              name="Juh Doe"
              occupation="CEO of Google"
              imageLink="https://i.pravatar.cc/300"
              href="https://www.google.com"
            />
          </div>
        </div>
        {/*FAQ*/}
        <div id="faq" className="w-[80%] flex h-auto flex-col scroll-mt-20 items-center">
          <h2 className="sm:text-5xl text-4xl font-medium mb-10 text-center">FAQ</h2>
          <Accordion
            allowMultipleExpanded
            allowZeroExpanded
            className="flex flex-col gap-10 items-center w-[95%] md:w-[500px] [&>*]:w-full"
          >
            <div className="bg-[#efffb0] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#c1f5a2] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#a2f7a3] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#a1fadc] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#a5fbfe] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#a2e0fb] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#a4a2f5] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#bda1fa] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#e3a2ff] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    Are you a human?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </div>
    </main>
  )
}
