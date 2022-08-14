import React from "react"
import "../styles/productCard.css"

function Pcard(props: any) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-5'>
      <img className='max-w-4md mx-auto' src={props.prodImage} alt='Product'/>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 productDetails'>{props.prodName}</div>
        <div>
          {props.prodDetails} <br></br>
          {props.prodPrice}
        </div>
      </div>
    </div>
  )
}

export default Pcard