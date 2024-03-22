'use client'
import DisplayCard from "../components/DisplayCard/displaycard"
import { CardData } from "../lib/interfaces"
import { usePathname, useSearchParams } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function Section(){
  const pathname = usePathname()
  const params = useSearchParams()
  const [cardData, setCardData] = useState<any[]>([])
  useEffect(()=>{
    const data = async() => {
      const d = await import(`@/content/${params.get('file')}`)
      setCardData(JSON.parse(d.default))
    }
    data()
  }, [pathname, params])
  return(
    <div className="p-4">
      <ul>
        {cardData.map((card, index) => {
          return(
            <li className="mb-12" key={index}>
              <DisplayCard props={card as CardData}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}