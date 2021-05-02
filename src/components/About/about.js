import React from 'react'
import "./style.css"
import img from "./img.jpg"
import Download from "../download/download"

const About = ()=> (
  <>
    <div className="containerabout">
    <h2 className="text-center">Introduction</h2>
<div className="about">
<img src={img} alt="profile pic" className="img-fluid" id="profilePic"/>
        <p>
          Salesforce Certified Administrator currently 
          attending Northwestern University, Full Stack 
          Developer Bootcamp. 
        </p>
        <p>After graduation, looking 
          forward to a rewarding career in the IT industry. 
          With education of responsive design, development 
          and layout usability of websites with HTML, CSS, 
          Javascript and API. 
        </p>
        <p>
          Currently attending Node.js for back end. 
          Continue education of Salesforce Certified 
          Platform App Builder Certification. 
        </p>
        <p>
          Eager to learn, easy going by nature and 
            confident with working with work colleagues and 
            senior managers. 
        </p>
        <p>
          Currently looking for a suitable graduate web 
          developer position with a progressive employer. 
          Previous background includes medicine, after a 
          career change into Software Development and Salesforce
        </p>
        <Download/>
</div>

<div className="skills about">
  <h3>FRONT-END</h3>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React.js</li>
    <li>JQuery</li>
    <li>Bootstrap</li>
  </ul>

  <h3>BACK-END</h3>
  <ul>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    <li>MySQL.js</li>

  </ul>
</div>
</div>
</>
)

export default About
