import React, { useState, useEffect } from 'react'
import Portfolio from '../components/Portfolio/portfolio'
// import Seeds from "../utils/projectsSeeds"
import Card from "../components/Card/card"

const PortfolioPage = () => {
  const [projects, setProjects] = useState([])
  console.log(projects)  

  useEffect(() => {
// setProjects(Seeds)
  }, [])

  return(
    <div>
      <Portfolio>
      {/* {projects.map((project, index)=>(
          <Card 
          key={index}
          {...project}/>
          ))} */}
          </Portfolio>

    </div>
  )
}

export default PortfolioPage