import React, { useState, useEffect } from 'react'
import About from '../components/About/about'

const HomePage = () => {
  // const [drawings, setDrawings] = useState([])
  // console.log(drawings)  

  useEffect(() => {
    // API.getDrawings()
    //   .then(response => setDrawings(response.data))
    //   .catch(err => console.log(err))
  }, [])
  
  return (
    <About/>

  )
}

export default HomePage