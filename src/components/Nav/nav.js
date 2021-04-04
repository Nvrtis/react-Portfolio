import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Nav = () => (

    <ul className="nav justify-content-center">
          <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" aria-current="page" href="#">Contact</Link>
          </li>

          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" aria-current="page" href="#">Portfolio</Link>
          </li>
        </ul>
)

export default Nav