import React from 'react'

export default function PersonIcon({ name, occupation, imageLink, href }: { name?: string, occupation?: string, imageLink?: string, href?: string }) {
  return (
    <a
      className="flex flex-col items-center gap-4 hover:scale-110 duration-500 xs:min-w-[200px]"
      target="_blank"
      rel="noopener"
      href={href}
    >
      <img className="h-32 w-32" src={imageLink} alt={name} />
      <div className="text-white text-center">
        <h1 className="text-2xl">{name}</h1>
        <h2 className="text-xl
        ">{occupation}</h2>
      </div>
    </a>
  )
}
