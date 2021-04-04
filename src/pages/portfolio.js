import React, { useState, useEffect } from 'react'
import Portfolio from '../components/Portfolio/portfolio'
import Seeds from "../utils/projectsSeeds"
import Card from "../components/Card/card"
import Container from "../components/Container/container"
import Col from "../components/Col/col"

const PortfolioPage = () => {
  const [projects, setProjects] = useState([])
  console.log(projects)

  useEffect(() => {
    setProjects(Seeds)
  }, [])

  return (
    <div>
      <Portfolio/>
        <Container>
          {projects.map((project) => (
            <Col className="col" key={project.id}>
              <Card {...project} />
            </Col>
          ))}
        </Container>
        
    </div>
  )
}

export default PortfolioPage