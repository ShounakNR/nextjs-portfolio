import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./navlinks";


export function Navbar() {
  return (
    <div className="flex items-center px-3 py-4 md:px-2 gap-x-20">
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
      <NavLinks />
    </div>
  )
}
