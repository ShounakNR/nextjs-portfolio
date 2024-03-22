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
    route: '/work',
    file: 'work'
  },
  {
    name: 'Projects',
    route: '/projects',
    file: 'projects'
  },
  {
    name: 'Education',
    route: '/education',
    file: 'education'
  },
  {
    name: 'Resume',
    route: 'https://drive.google.com/file/d/1_H502tsmUYnOAGvqD2nR6PTszCdVWd_2/view?usp=sharing',
    target: '_blank'
  }
]


export function NavLinks() {
  const pathName = usePathname()
  const createQueryString = ((name: string, value: string | undefined)=>{
    const params = new URLSearchParams()
    params.set(name, value || '')
    return params.toString()
  })
  return (
    <div className="flex flex-col float-center w-1/2 mt-16 ">
      {navItems.map((link) => {
        const activeClass = clsx(
          {'text-teal-600': pathName === link.route}
        )
        return (
          <Link
            key={link.name}
            href={link.route + '?' + createQueryString('file', link.file)}
            // as={link.route}
            className={"p-2 text-sm font-medium justify-start text-sky-100"}
            target={link?.target}
          >
            <span className={`hidden md:block font-serif text-m hover:text-cyan-500 focus ${activeClass} uppercase`}>{link.name}</span>
          </Link>
        );
      })}
    </div>

  )
}
