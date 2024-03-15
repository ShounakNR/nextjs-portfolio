import { SkillsInfo, SkillInfo } from "@/app/lib/interfaces"


export default function Skills(props: SkillsInfo){
  return(
    <ul className="mt-2 flex flex-wrap">
      {props.skills.map((skill: SkillInfo) => {
        return (
          <li key={skill.name} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
              {skill.name}
            </div>
          </li>
        )
      })}
    </ul>
  )
}