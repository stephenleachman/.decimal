'use client'

import { navbarLinks } from "@/constantes";
import  Link from "next/link"; 
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavbarLinks() {

  const pathname = usePathname()

  return (
    <nav className="gap-7 lg:flex hidden">
      <ul className="flex gap-6 items-center">
        {navbarLinks.slice(0, 4).map((link) => {
          const isActive = link.route === pathname 

          return (
            <li key={link.title} 
            >
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
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="
              bg-background/0 
              text-headingtext 
              font-medium
              lext-linktext
              text-base
              hover:text-linktext/70 
              data-[active]:text-linktext/70 
              data-[state=open]:text-linktext/70
              transition 
              ease-in-out 
              px-0 
              hover:bg-background/0 
              focus:bg-background/0 
              data-[active]:bg-background/0 
              data-[state=open]:bg-background/0
              ">
                Resources
              </NavigationMenuTrigger>

            <NavigationMenuContent id="navbar-resources-menu" className="p-5 flex flex-col gap-5 min-w-[200px] backdrop-blur-xl bg-background/60 rounded-none ring-0 relative">
              {navbarLinks.slice(4).map((link) => {
                const isActive = link.route === pathname 

                return (
                  <Link 
                    key={link.title} 
                    className="text-headingtext font-medium hover:text-linktext/70 transition ease-in-out "
                    href={link.route}
                    legacyBehavior passHref
                  >
                    <NavigationMenuLink 
                      className={`${navigationMenuTriggerStyle()} ${
                        isActive
                          ? 'bg-primary'
                          : 'text-headingtext font-medium hover:text-linktext/70 transition ease-in-out'
                      }`}
                      >
                      {link.title}
                    </NavigationMenuLink>
                  
                  </Link>
                )
              })}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}