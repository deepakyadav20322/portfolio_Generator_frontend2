import React from 'react'
import Link from 'next/link'

import NavigationRootLinkChange from './NavigationRootLinkChange'
const Navbar = () => {
  return (
    <div>
         <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="container flex h-14 items-center justify-between max-w-7xl  mx-auto w-full ">
        <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold">Portfolio</span>
                  </Link>
    
          <nav className="flex items-center space-x-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              FAQ
            </Link>
            
          </nav>
          <div className='flex justify-center items-center gap-x-3'>
         
        <NavigationRootLinkChange/>

          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar