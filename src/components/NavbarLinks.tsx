'use client'

import { navbarLinks } from "@/constantes";
import  Link from "next/link"; 
import { usePathname } from "next/navigation";


export default function NavbarLinks() {

  const pathname = usePathname()

  return (
    <nav>
      <ul className="gap-4 xl:gap-6 lg:flex hidden">
        {navbarLinks.map((link) => {
          const isActive = link.route === pathname 

          return (
            <li key={link.title} className={` ${ isActive ? 'text-primary' : 'text-gray-700'}`}>
              <Link 
                className={` ${ isActive ? 'text-linktext/70 underline underline-offset-[18px] decoration-4 decoration-primary font-medium' : 'text-headingtext font-medium hover:text-linktext/70 transition ease-in-out'}`}
                href={link.route}
              >
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}