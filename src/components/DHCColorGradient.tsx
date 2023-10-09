import React from 'react'
import Link from 'next/link'

export default function Navbutton({ className, children, mix = true }: {
  className?: string,
  children: React.ReactNode,
  mix?: boolean
}) {
  return (
    <div className={`flex flox-row ${className}`}>
      {children}
      <div className={`${mix ? "mix-blend-multiply" :  ""} dhcColorGradient1 min-h-min min-w-[25%]`}>
      </div>
      <div className={`${mix ? "mix-blend-multiply" :  ""} dhcColorGradient2 min-h-min min-w-[25%]`}>
      </div>
      <div className={`${mix ? "mix-blend-multiply" :  ""} dhcColorGradient3 min-h-min min-w-[25%]`}>
      </div>
      <div className={`${mix ? "mix-blend-multiply" :  ""} dhcColorGradient4 min-h-min min-w-[25%]`}>
      </div>
    </div>
  )
}
