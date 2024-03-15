import { CardData } from "@/app/lib/interfaces"
import AdditionalLinks from "./additionalLinks"
import Skills from "./skills"

export default function DisplayCard({
  props
}:{
  props: CardData
}) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 col-span-2">
          {props.sidebar}
      </div>
      <div className="z-10 col-span-6">
        <h3 className="font-bold text-xl mb-2 inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link">
          {props.header}
        </h3>
        <p className="text-stone-100 text-base">
          {props.body}
        </p>
        <AdditionalLinks {...props.additional_links} />
        <Skills {...props.skills} />
      </div>
    </div>
  )
}
