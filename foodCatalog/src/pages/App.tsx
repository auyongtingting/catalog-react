/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from "react"
import "../styles/App.css"
import Card from "../components/Card"
import {CHINESE, KOREAN_PRODUCTS, KOREAN, JAPANESE, CATALOG} from "../constants/constants"
import data from "../data/mockFoodData.json"

function App() {
  const [selectedTab, setSelectedTab] = useState(KOREAN)
  const [active] = useState("inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500")
  const [nonActive] = useState("inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")

  const [categoryList, setCategoryList] = useState(data.catalog)

  function selectTab(tab:string) {
    setSelectedTab(tab)
  }

  useEffect( () => { 
    setCategoryList(data.catalog.filter(category => {
      category.prod_group.includes(selectedTab)
      return category.prod_group.includes(selectedTab)
    }))
    console.log("categoryList",categoryList)
  },[selectedTab])

  return (
    <div className='main'>
      <div>
        <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 '>
          <ul className='flex flex-wrap -mb-px'>
            <li className='mr-2'>
              <a href='#' onClick={()=> selectTab("Korean products")} className={selectedTab === KOREAN ? active: nonActive}>{KOREAN_PRODUCTS}</a>
            </li>
            <li className='mr-2'>
              <a href='#chineseFood' onClick={()=> selectTab("Chinese products")} className={selectedTab === CHINESE ? active: nonActive}>Chinese products</a>
            </li>
            <li className='mr-2'>
              <a href='#japaneseFood' onClick={()=> selectTab("Japanese products")} className={selectedTab === JAPANESE ? active: nonActive}> Japanese products</a>
            </li>
          </ul>
        </div>

        <div className='pl-5 pt-4 text-sm'>{CATALOG}</div>
        <div className='pl-5 pt-1 productCatalog'>{selectedTab}</div>
      
        <div>
          {categoryList.map((category, index) => (
            <div className='grid md:grid-cols-4' key={index}>
              {category.items.map((item, index) => (
                <div key={index}>
                  <Card prodName={item.prod_name} prodUnits={item.unit} prodPrice={item.price} prodMoq={item.moq} prodImage={item.img} />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
    
  )
}

export default App
