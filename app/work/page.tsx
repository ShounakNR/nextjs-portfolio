import DisplayCard from "../components/DisplayCard/displaycard"
import { CardData } from "../lib/interfaces"
import { work } from "@/content/work"

export default function Education(){
  return(
    <div className="p-4">
      <ul>
        {work.map((work, index) => {
          return(
            <li className="mb-12" key={index}>
              <DisplayCard props={work as CardData}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}