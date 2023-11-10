import React from 'react'
import Image from 'next/image'

export default function Sponsor({ name, imageLink, href }: { name?: string, imageLink?: string, href?: string }) {
  return (
    <a
      className="flex flex-col items-center gap-2 hover:scale-110 duration-500"
      target="_blank"
      rel="noopener"
      href={href}
    >
      <Image 
        src={imageLink as string}
        width={200}
        height={200}
        alt={`Picture of ${name}`}
      />
    </a>
  )
}
