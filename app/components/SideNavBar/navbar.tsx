import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "./navlinks";
import { Socials } from "./socials";


export function Navbar() {
  return (
    <div className="sticky top-0 flex  max-h-screen w-1/3 flex-col justify-start py-24">
      <div>
        <Link
          className="rounded-md p-4"
          href="/"
        >
          <h1 className="text-4xl font-bold tracking-tight text-slate-200">
            Shounak Rangwala
          </h1>
        </Link>
        <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Software Engineer
        </h2>
        <p className="max-w-xs leading-normal">Creating Robust and Performant Web Applications</p>
        <NavLinks />
      </div>
      <Socials />
    </div>
  )
}
