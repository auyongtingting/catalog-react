/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from "react"
import "../styles/App.css"
import Card from "../components/Card"
import {CATALOG, CCAFS, VAFB, KSC } from "../constants/constants"
import { launchData, spaceXGQL } from "../common/dataTypes"

function App() {
  const [selectedTab, setSelectedTab] = useState(CCAFS)
  const [active] = useState("inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500")
  const [nonActive] = useState("inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
  const [filteredData, setFilteredData] = useState<launchData[] | undefined>(undefined)

  
  function selectTab(tab:string) {
    setSelectedTab(tab)
  }

  const query = `
  {
    launchesPast(limit: 10, find: {site_name: "`+selectedTab+`"}) {
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
  `

  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch("https://api.spacex.land/graphql/",  {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({query: query})
      }) 
      const data: spaceXGQL | undefined = await response.json()

      if (!response.ok || !data) {
        console.log("Error")
      } else {
        console.log("Response")
        setFilteredData(data.data.launchesPast)
      }
    }
    fetchData()

  },[selectedTab])

  return (
    <div className='main'>
        
      <div>
        <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 '>
          <ul className='flex flex-wrap -mb-px'>
            <li className='mr-2'>
              <a href='#' onClick={()=> selectTab(CCAFS)} className={selectedTab === CCAFS ? active: nonActive}>{CCAFS}</a>
            </li>
            <li className='mr-2'>
              <a href='#' onClick={()=> selectTab(VAFB)} className={selectedTab === VAFB ? active: nonActive}>{VAFB}</a>
            </li>
            <li className='mr-2'>
              <a href='#' onClick={()=> selectTab(KSC)} className={selectedTab === KSC ? active: nonActive}>{KSC}</a>
            </li>
          </ul>
        </div>

        <div className='pl-5 pt-4 text-sm'>{CATALOG}</div>
        <div className='pl-5 pt-1 productCatalog'>{selectedTab}</div>

        <div className='grid md:grid-cols-4' >
          {filteredData?.map((launch,index) => (
            <div key={index}>
              <Card missionName={launch.mission_name} missionDate={launch.launch_date_local} missionLink={launch.links.flickr_images} rocketName={launch.rocket.rocket_name}/ >
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
