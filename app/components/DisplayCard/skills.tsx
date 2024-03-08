import { SkillsInfo, SkillInfo } from "@/app/lib/interfaces"


export default function Skills(props: SkillsInfo){
  return(
    <ul>
      {props.skills.map((skill: SkillInfo) => {
        return (
          <li key={skill.name}>
            {skill.name}
          </li>
        )
      })}
    </ul>
  )
}