/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react"
import "../styles/App.css"
import Pcard from "../components/productCard"
import {CHINESE, KOREAN_PRODUCTS, KOREAN, JAPANESE, CATALOG} from "../constants/constants"

function App() {
  const [selectedTab, setSelectedTab] = useState("")
  const [active] = useState("inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500")
  const [nonActive] = useState("inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")

  const [itemList, setItemList] = useState([{
    ProductName: "Product 1",
    ProductDetails: "MOQ 20 Units",
    ProductPrice: "SGD 4.50/carton",
    ProductImage: "/images/HotPepperPaste.png"
  },
  {
    ProductName: "Product 2",
    ProductDetails: "MOQ 20 Units",
    ProductPrice: "SGD 4.50/carton", 
    ProductImage: "/images/bbqSauce.png"
  },
  {
    ProductName: "Product 3",
    ProductDetails: "MOQ 20 Units",
    ProductPrice: "SGD 4.50/carton",
    ProductImage: "/images/spicyBBQSauce.png"
  },
  {
    ProductName: "Product 4",
    ProductDetails: "MOQ 20 Units",
    ProductPrice: "SGD 4.50/carton", 
    ProductImage: "/images/bbqSauce.png"
  },
  {
    ProductName: "Product 5",
    ProductDetails: "MOQ 20 Units",
    ProductPrice: "SGD 4.50/carton",
    ProductImage: "/images/spicyBBQSauce.png"
  }
  ])

  function selectTab(tab:string) {
    setSelectedTab(tab)
  }

  return (
    <div className='main'>
      <div>
        <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 '>
          <ul className='flex flex-wrap -mb-px'>
            <li className='mr-2'>
              <a href='#' onClick={()=> selectTab("korean")} className={selectedTab === KOREAN ? active: nonActive}>{KOREAN_PRODUCTS}</a>
            </li>
            <li className='mr-2'>
              <a href='#chineseFood' onClick={()=> selectTab("chinese")} className={selectedTab === CHINESE ? active: nonActive}>Chinese products</a>
            </li>
            <li className='mr-2'>
              <a href='#japaneseFood' onClick={()=> selectTab("japanese")} className={selectedTab === JAPANESE ? active: nonActive}> Japanese products</a>
            </li>
          </ul>
        </div>
        <div>
          <div className='pl-5 pt-4 text-sm'>{CATALOG}</div>
          <div className='pl-5 pt-1 productCatalog'>{KOREAN_PRODUCTS}</div>
          <h1></h1>
        </div>
        <div className='grid md:grid-cols-4'>
          {
            itemList.map((item:any) => 
              <span key={item.toString()}>
                <Pcard prodName={item.ProductName} prodDetails={item.ProductDetails} prodPrice={item.ProductPrice} prodImage={item.ProductImage} />
              </span>
          
            ) 
          }
        </div>
      </div>
    </div>
    
  )
}

export default App
