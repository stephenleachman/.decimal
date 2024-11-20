
import Image from "next/image"
import { RiMenu3Line } from "react-icons/ri"
import NavLogoDark from "@/../public/logos/logo-dark.svg"
import NavLogoLight from "@/../public/logos/logo-light.svg"
import MobileNavbarLinks from "./MobileNavbarLinks"
import Link from "next/link"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"



export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="text-4xl text-linktext">
        <RiMenu3Line />
      </SheetTrigger>
      <SheetContent className="w-[300px]">
        <SheetHeader>
        <SheetTitle className="mb-10">
          <Link
            href="/"  
          >
          <Image 
            src={NavLogoDark} 
            alt={"Mobile Logo"}    
            style={{
              width: 'auto',
              height: '30px',
            }}    
            className="hidden dark:block"
          />
          <Image 
            src={NavLogoLight} 
            alt={"Mobile Logo"}    
            style={{
              width: 'auto',
              height: '30px',
            }}      
            className="block dark:hidden"
          />
          </Link>
        </SheetTitle>
        <SheetDescription className="hidden"> Mobile Navagation </SheetDescription>
        </SheetHeader>
        <MobileNavbarLinks />
      </SheetContent>
    </Sheet>
  )
}
