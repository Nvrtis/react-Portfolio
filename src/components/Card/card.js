import React, { useRef, useEffect } from 'react'
// import images from "../images"

const Card = ({ title, link, repoLink, desc,}) => {

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={link} className="btn btn-primary">Link to live page</a>
        <a href={repoLink} className="btn btn-primary">Link to repo page</a>
      </div>
    </div>
  )
}

export default Card