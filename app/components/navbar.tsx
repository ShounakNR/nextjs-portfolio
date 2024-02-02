import Link from "next/link";
import Image from "next/image";
import snr from '@/app/snr.png'

const navItems = {
  'About': {
    route: '/'
  },
  'Work': {
    route: '/work'
  },
  'Projects': {
    route: '/projects'
  },
  'Education': {
    route: '/education'
  }
}


export default function Navbar () {
  console.log(navItems)
  return (
    <div>
    </div>
  )
}
