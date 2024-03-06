'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx'
import Image from "next/image";

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


export function Navbar() {
  const pathName = usePathname()
  console.log(pathName)
  return (

    <div className="flex items-center px-3 py-4 md:px-2">
      <Link
        className="rounded-md p-4"
        href="/"
      >
        <Image
          src='/snr.png'
          width={100}
          height={100}
          alt='SNR Logo'
        />
      </Link>
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
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  )
}
