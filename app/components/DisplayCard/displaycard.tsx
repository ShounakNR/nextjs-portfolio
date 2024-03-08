import { CardData } from "@/app/lib/interfaces"
import AdditionalLinks from "./additionalLinks"
import Skills from "./skills"

export default function DisplayCard({
  props
}:{
  props: CardData
}) {
  return (
    <div>
      <h3>
        {props.header}
      </h3>
      <p>
        {props.body}
      </p>
      <AdditionalLinks {...props.additional_links} />
      <Skills {...props.skills} />
    </div>
  )
}
