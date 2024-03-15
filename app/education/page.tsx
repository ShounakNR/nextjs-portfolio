import DisplayCard from "../components/DisplayCard/displaycard"
import { CardData } from "../lib/interfaces"
import { educations } from "@/content/education"

export default function Education(){
  return(
    <div className="p-4">
      <ul>
        {educations.map((edu, index) => {
          return(
            <li className="mb-12" key={index}>
              <DisplayCard props={edu as CardData}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}