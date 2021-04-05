import React from 'react'
import "./style.css"

const ContactInfo = ()=> (
      <div className="containerContact">
        <div className="row">
          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/nicholas-vincent-vrtis-00798a143/">
              <img src="https://image.flaticon.com/icons/png/512/49/49656.png" className="img-fluid" alt="Linked-in logo"
                id="linkedIn"/></a>
          </div>
          <div className="col-md-4">
            <a href="https://www.facebook.com/nicholas.v.aakrevrtis/">
              <img src="https://www.flaticon.com/svg/static/icons/svg/61/61045.svg" className="img-fluid" alt="facebook logo"
                id="facebook"/></a>
          </div>
          <div className="col-md-4">
            <img src="https://w7.pngwing.com/pngs/356/440/png-transparent-iphone-computer-icons-telephone-email-telephone-electronics-text-mobile-phones.png" className="img-fluid" alt="phone logo"
            id="phone"/>
            <p className="phoneNr">
              Cell-phone number:</p>
              <p className="phoneNr2">
              (+47) 4676-2610
            </p>
          </div>
        </div>
      </div>
    )
    

export default ContactInfo



    