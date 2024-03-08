import DisplayCard from "../components/DisplayCard/displaycard"
import { CardData } from "../lib/interfaces"

const educations = [
  {
    header: 'Rutgers',
    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: undefined,
    additional_links:{
      links:
      [
        {
          name: 'Narendra Puri Scholarship',
          link: 'https://www.ece.rutgers.edu/news/2020-2021-narendra-puri-scholarship-awarded-three-ece-students'
        }
      ]
    },
    skills: {
      skills:
        [
          {
            name: 'Software Engineering',
            color: 'blue'
          },
          {
            name: 'Database Management',
            color: 'emerald'
          },
          {
            name: 'Artificial Intelligence',
            color: 'slate'
          }
        ]
    }
  }
]
export default function Education(){
  return(
    <div className="p-4">
      <p>Education</p>
      <ul>
        {educations.map((edu, index) => {
          return(
            <li key={index}>
              <DisplayCard props={edu as unknown as CardData}/>
            </li>
          )
        })}
      </ul>

    </div>
  )
}