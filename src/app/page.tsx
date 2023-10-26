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
            className="sm:h-[90px] sm:w-[545px] xs:h-[50px] xs:w-[380px] h-[40px] w-[242px] mb-3"
          >
            <h2 className="sm:text-7xl xs:text-5xl text-[32px] font-bold text-center absolute">Innovate Hacks</h2>
          </DHCColorGradient>
          <p className="sm:text-2xl text-xl">
            November 12 - 26, 2023
          </p>
          <p className="sm:text-2xl text-xl">
            Online Hackathon
          </p>
          <a
            className="pl-0.5 opacity-100 duration-200 transition-colors lg:text-lg xl:text-xl"
            target="_blank"
            rel="noopener"
            href={"https://innovate-hacks.devpost.com/"}
          >
            <DHCColorGradient
              className="h-[40px] w-[210px] group mt-5"
            >
              <div className="flex flex-row absolute items-center justify-center gap-2 transition-all sm:group-hover:ml-2 sm:group-hover:scale-110 duration-500">
                <h1
                  className="transition-all sm:text-2xl text-xl font-bold text-center"
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
              <p className="text-xl font-light leading-7">
                &emsp;Welcome to Innovate Hacks, a platform where your creativity knows no bounds.
                Hosted by Dublin Hack Club, this hackathon is not just about coding, it’s about fostering
                innovation and birthing revolutionary ideas. Over the span of two weeks, from
                November 12 to November 26, get ready to dive deep into the world of technology,
                attend enlightening workshops, interact with accomplished guest speakers, and work
                on a project that could be the stepping stone for tomorrow's technological advancements.
                Whether you are a seasoned coder or a newbie, this is your stage to shine, learn and collaborate.
              </p>
              <p className="text-xl font-light leading-7">
                &emsp;Innovate Hacks is an open challenge inviting individuals from all walks of coding experience.
                Through hackclub.com, we have orchestrated a series of workshops aimed at both honing the skills of
                seasoned developers and nurturing the curiosity of beginners. Our event is graced by the presence of
                industry stalwarts who will not only share their journey but also adjudicate the projects submitted at
                the climax of the hackathon.
              </p>
              <p className="text-xl font-light leading-7">
                &emsp;Teamwork often breeds groundbreaking ideas but individual endeavors are equally celebrated here.
                To embark on this exciting journey, simply join the hackathon on Devpost and become a part of our vibrant
                community on the linked Discord server: https://discord.gg/ubUQkBReHZ
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
              imageLink=""
              href="https://www.google.com"
            />
            <Sponsor
              name="Apple"
              imageLink=""
              href="https://www.apple.com"
            />
            <Sponsor
              name="Tesla"
              imageLink=""
              href="https://www.tesla.com"
            />
          </div>
        </div>
        {/*Guests*/}
        <div id="judges" className="w-[80%] flex h-auto flex-col scroll-mt-20 items-center">
          <h2 className="sm:text-5xl text-4xl font-medium mb-10 text-center">Judges</h2>
          <div className="flex flex-row flex-wrap justify-center pt-0 sm:gap-8 gap-14 h-auto">
            <PersonIcon
              name="Jaiveer Singh"
              occupations={["MET Berkeley Alumni", "Robotics Engineer @ Nvidia"]}
              imageLink=""
              href="https://www.google.com"
            />
            <PersonIcon
              name="Satyam Sinha"
              occupations={["VP Engineering @ Palo Alto Networks", "Co-Founder of Aporeto"]}
              imageLink=""
              href="https://www.google.com"
            />
            <PersonIcon
              name="Nizar Quamar"
              occupations={["Director of Engineering Software Development @ Oracle Health and RPA"]}
              imageLink=""
              href="https://www.google.com"
            />
          </div>
        </div>
        {/*Team*/}
        <div id="team" className="w-[80%] flex h-auto flex-col scroll-mt-20 items-center">
          <h2 className="sm:text-5xl text-4xl font-medium mb-10 text-center">Team</h2>
          <div className="flex flex-row flex-wrap justify-center items-center sm:gap-8 gap-14">
            <PersonIcon
              name="Srish Nigam"
              occupations={["Founder/President of Dublin Hack Club"]}
              imageLink=""
              href="https://www.google.com"
            />
            <PersonIcon
              name="Yash Bansal"
              occupations={["Vice President of Events of Dublin Hack Club"]}
              imageLink=""
              href="https://www.google.com"
            />
            <PersonIcon
              name="Lukas Somwong"
              occupations={["Organizer"]}
              imageLink=""
              href="https://www.google.com"
            />
            <PersonIcon
              name="Ashmit S"
              occupations={["Organizer"]}
              imageLink=""
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
                    How much experience is needed to participate?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    None. This hackathon is meant to both help new people learn skills and let experienced coders showcase theirs.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#c1f5a2] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    How long do we have to submit?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    You have 2 weeks to submit your work. At the end of which it will be graded by a panel of judges.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#a2f7a3] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    What is the maximum prize? What is the guaranteed prize for all participants?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Undetermined. We are still looking for sponsors. We will update this as soon as we know.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <div className="bg-[#a1fadc] p-0.5">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >
                    What is the genre? What kind of project should I submit?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-gray-800">
                  <p>
                    Anything innovative. Try to find something new, something that’s not out there at the moment.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            {/*<div className="bg-[#a5fbfe] p-0.5">*/}
            {/*  <AccordionItem>*/}
            {/*    <AccordionItemHeading>*/}
            {/*      <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >*/}
            {/*        Are you a human?*/}
            {/*      </AccordionItemButton>*/}
            {/*    </AccordionItemHeading>*/}
            {/*    <AccordionItemPanel className="p-4 bg-gray-800">*/}
            {/*      <p>*/}
            {/*        Exercitation in fugiat est ut ad ea cupidatat ut in*/}
            {/*        cupidatat occaecat ut occaecat consequat est minim minim*/}
            {/*        esse tempor laborum consequat esse adipisicing eu*/}
            {/*        reprehenderit enim.*/}
            {/*      </p>*/}
            {/*    </AccordionItemPanel>*/}
            {/*  </AccordionItem>*/}
            {/*</div>*/}
            {/*<div className="bg-[#a2e0fb] p-0.5">*/}
            {/*  <AccordionItem>*/}
            {/*    <AccordionItemHeading>*/}
            {/*      <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >*/}
            {/*        Are you a human?*/}
            {/*      </AccordionItemButton>*/}
            {/*    </AccordionItemHeading>*/}
            {/*    <AccordionItemPanel className="p-4 bg-gray-800">*/}
            {/*      <p>*/}
            {/*        Exercitation in fugiat est ut ad ea cupidatat ut in*/}
            {/*        cupidatat occaecat ut occaecat consequat est minim minim*/}
            {/*        esse tempor laborum consequat esse adipisicing eu*/}
            {/*        reprehenderit enim.*/}
            {/*      </p>*/}
            {/*    </AccordionItemPanel>*/}
            {/*  </AccordionItem>*/}
            {/*</div>*/}
            {/*<div className="bg-[#a4a2f5] p-0.5">*/}
            {/*  <AccordionItem>*/}
            {/*    <AccordionItemHeading>*/}
            {/*      <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >*/}
            {/*        Are you a human?*/}
            {/*      </AccordionItemButton>*/}
            {/*    </AccordionItemHeading>*/}
            {/*    <AccordionItemPanel className="p-4 bg-gray-800">*/}
            {/*      <p>*/}
            {/*        Exercitation in fugiat est ut ad ea cupidatat ut in*/}
            {/*        cupidatat occaecat ut occaecat consequat est minim minim*/}
            {/*        esse tempor laborum consequat esse adipisicing eu*/}
            {/*        reprehenderit enim.*/}
            {/*      </p>*/}
            {/*    </AccordionItemPanel>*/}
            {/*  </AccordionItem>*/}
            {/*</div>*/}
            {/*<div className="bg-[#bda1fa] p-0.5">*/}
            {/*  <AccordionItem>*/}
            {/*    <AccordionItemHeading>*/}
            {/*      <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >*/}
            {/*        Are you a human?*/}
            {/*      </AccordionItemButton>*/}
            {/*    </AccordionItemHeading>*/}
            {/*    <AccordionItemPanel className="p-4 bg-gray-800">*/}
            {/*      <p>*/}
            {/*        Exercitation in fugiat est ut ad ea cupidatat ut in*/}
            {/*        cupidatat occaecat ut occaecat consequat est minim minim*/}
            {/*        esse tempor laborum consequat esse adipisicing eu*/}
            {/*        reprehenderit enim.*/}
            {/*      </p>*/}
            {/*    </AccordionItemPanel>*/}
            {/*  </AccordionItem>*/}
            {/*</div>*/}
            {/*<div className="bg-[#e3a2ff] p-0.5">*/}
            {/*  <AccordionItem>*/}
            {/*    <AccordionItemHeading>*/}
            {/*      <AccordionItemButton className="p-4 bg-gray-800 font-semibold" >*/}
            {/*        Are you a human?*/}
            {/*      </AccordionItemButton>*/}
            {/*    </AccordionItemHeading>*/}
            {/*    <AccordionItemPanel className="p-4 bg-gray-800">*/}
            {/*      <p>*/}
            {/*        Exercitation in fugiat est ut ad ea cupidatat ut in*/}
            {/*        cupidatat occaecat ut occaecat consequat est minim minim*/}
            {/*        esse tempor laborum consequat esse adipisicing eu*/}
            {/*        reprehenderit enim.*/}
            {/*      </p>*/}
            {/*    </AccordionItemPanel>*/}
            {/*  </AccordionItem>*/}
            {/*</div>*/}
          </Accordion>
        </div>
      </div>
    </main>
  )
}
