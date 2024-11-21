import  ThemeSwitch from "./ThemeSwitch";
import Image from 'next/image'
import NavLogoDark from "@/../public/logos/logo-dark.svg"
import NavLogoLight from "@/../public/logos/logo-light.svg"
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import NavbarLinks from "./NavbarLinks";
import MobileNav from "./MobileNav";


export default function Navbar() {
  return (
    <div className="backdrop-blur-xl bg-background/60 w-full flex justify-center fixed z-40 h-[55px]">
      <div className="main-nav-container flex justify-between"> 
        <div className="flex gap-8 items-center">
        <Link href="/">
          <Image
            src={NavLogoDark}
            alt="Company Logo"
            style={{
              width: 'auto',
              height: '25px',
            }}
            priority
            className="hidden dark:block"
          />
          <Image
            src={NavLogoLight}
            alt="Company Logo"
            style={{
              width: 'auto',
              height: '25px',
            }}
            priority
            className="block dark:hidden"
          />
        </Link>
        <NavbarLinks />
        
   

        </div>
        <div className=" gap-2 lg:flex hidden items-center">
        <Link 
          className={buttonVariants({ variant: "default" })}
          href="/contact"
          >
            Contact Us
        </Link>
        <Link 
          className={buttonVariants({ variant: "outline" })} 
          href="https://direct.dotdecimal.com/"
          target="_blank"
          >
            Client Login
          </Link>
          <div className="w-8 h-8 mb-2 mr-4">
          <ThemeSwitch />
          </div>
        </div>
        <div className="flex lg:hidden items-center gap-10">
          <div className="mb-2">
            <ThemeSwitch />
          </div>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}
