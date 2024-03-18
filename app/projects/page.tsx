import DisplayCard from "../components/DisplayCard/displaycard"
import { CardData } from "../lib/interfaces"
import { projects } from "@/content/projects"

export default function Education(){
  return(
    <div className="p-4">
      <ul>
        {projects.map((proj, index) => {
          return(
            <li className="mb-12" key={index}>
              <DisplayCard props={proj as CardData}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}