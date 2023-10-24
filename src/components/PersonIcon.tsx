import React from 'react'

export default function PersonIcon({ name, occupations, imageLink, href }: { name?: string, occupations?: string[], imageLink?: string, href?: string }) {
  return (
    <a
      className="flex flex-col items-center gap-4 hover:scale-110 duration-500 xs:min-w-[200px] max-w-min mb-auto"
      target="_blank"
      rel="noopener"
      href={href}
    >
      <img className="h-32 w-32" src={imageLink} alt={name} />
      <div className="text-white text-center flex flex-col gap-3">
        <h1 className="text-2xl">{name}</h1>
        {occupations ? occupations.map((occupation, index) =>
          <>
            <h2 key={index} className="text-lg
            ">
              {occupation}
            </h2>
          </>
        ) : null}
      </div>
    </a>
  )
}
