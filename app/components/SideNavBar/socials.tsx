'use client'
import Link from "next/link";
import Image from "next/image";


const socialItems = [
  {
    logo: '/linkedin.svg',
    route: 'https://www.linkedin.com/in/shounakrangwala/',
    name: 'LinkedIn'
  },
  {
    logo: '/github.svg',
    route: 'https://github.com/ShounakNR',
    name: 'GitHub'
  },
  {
    logo: '/envelope-regular.svg',
    route: 'mailto:shounakrangwala@gmail.com',
    name: 'Email'
  }
]


export function Socials() {
  return (
    <ul className="ml-1 mt-8 flex items-center">
      {socialItems.map((link) => {
        return(
          <li key={link.name} className="mr-5 text-xs shrink-0">
            <Link
              key={link.name}
              href={link.route}
              target="_blank"
            >
              <Image
                src={link.logo}
                alt={link.name}
                width={30}
                height={30}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
