import React from "react"
import "../styles/productCard.css"

function Card(props: any) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-5'>
      {props.missionLink != "" ? <img className='max-w-4md mx-auto' src={props.missionLink} alt='NO IMAGE'/> : <img className='max-w-4md mx-auto' src='/images/noimage.jpeg' alt='NO IMAGE'/>}
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 productDetails'>{props.missionName}</div>
        <div>
          {props.rocketName}<br></br>
          {props.missionSite}
          {props.missionDate}
        </div>
      </div>
    </div>
  )
}

export default Card