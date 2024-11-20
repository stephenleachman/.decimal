'use client'

import { navbarLinks } from "@/constantes";
import  Link from "next/link"; 
import { usePathname } from "next/navigation";


export default function NavbarLinks() {

  const pathname = usePathname()

  return (
    <nav>
      <ul className="gap-5 flex flex-col">
        {navbarLinks.map((link) => {
          const isActive = link.route === pathname 

          return (
            <li key={link.title} className={` ${ isActive ? 'text-primary' : 'text-gray-700'}`}>
              <Link 
                className={` ${ isActive ? 'text-linktext/70 decoration-4 decoration-primary font-normal border-l-4 border-primary pl-[21px] ml-[-25px]' : 'text-linktext font-normal hover:text-linktext/70 transition ease-in-out'}`}
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