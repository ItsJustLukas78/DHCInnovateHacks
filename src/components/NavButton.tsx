import React from 'react'
import Link from 'next/link'

export default function Navbutton({ external, href, children }: { external?: boolean, href: string , children: React.ReactNode }) {
  return <>
    {!external ? (
      <Link
        className="duration-500 transition-colors h-auto w-fit whitespace-nowrap text-white md:text-xl hover:text-gray-500"
        href={href}
      >
        {children}
      </Link>
    ) : (
      <a
        className="duration-500 transition-colors h-auto w-fit whitespace-nowrap text-white lg:text-lg xl:text-xl hover:text-gray-500"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {children}
      </a>
    )}
  </>
}
