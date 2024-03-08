import { LinkInfo, LinksInfo } from "@/app/lib/interfaces"
import Link from "next/link"


export default function AdditionalLinks(props: LinksInfo){
  return(
    <ul>
      {props.links.map((link: LinkInfo) => {
        return (
          <Link
            key={link.name}
            href={link.link}
            className={"p-2 text-sm font-medium justify-start text-sky-100"}
          >
            {link.name}
          </Link>
        )
      })}
    </ul>

  )
}