import React from 'react'

export default function Sponsor({ name, imageLink, href }: { name?: string, imageLink?: string, href?: string }) {
  return (
    <a
      className="flex flex-col items-center gap-2 hover:scale-110 duration-500"
      target="_blank"
      rel="noopener"
      href={href}
    >
      <img className="h-32 w-32" src={imageLink} alt={name} />
    </a>
  )
}
