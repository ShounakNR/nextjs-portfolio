'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx'

const navItems = [
  {
    name: 'About',
    route: '/'
  },
  {
    name: 'Work',
    route: '/work'
  },
  {
    name: 'Projects',
    route: '/projects'
  },
  {
    name: 'Education',
    route: '/education'
  }
]


export function NavLinks() {
  const pathName = usePathname()
  return (
    <div className="flex float-right">
      {navItems.map((link) => {
        const activeClass = clsx(
          {'text-blue-600': pathName === link.route}
        )
        return (
          <Link
            key={link.name}
            href={link.route}
            className={`h-[48px] gap-10 rounded-md p-5 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${activeClass}`}
          >
            <p className="hidden md:block font-serif text-xl">{link.name}</p>
          </Link>
        );
      })}
    </div>

  )
}
