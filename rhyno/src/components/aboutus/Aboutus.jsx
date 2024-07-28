import React from 'react'
import './Aboutus.css'
import rhyno_logo from '../../assets/rhyno_logo.png'; // Adjusted path

function Aboutus() {
  return (
    <div>
       
      <div className="image-container">
          <img src={rhyno_logo} alt="Product" className="main-image" />
        </div>
        <h1 >ABOUT US</h1>
     <p className='lead'><b>
     Established in 2019 by an automotive engineer with a vision for sustainable and robust
mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
of young individuals passionately driving innovation in the electric vehicle industry. We
believe in engineering solutions that solve problems.
     </b>

</p>
<br />
     <p className='lead'><b>
     With our first product, we've taken a bold step to create something more than just a vehicle;
it's a unique experience of elegance, comfort and style, addressing the pitfalls of
conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
era in sustainable and dependable electric transportation.
     </b>
    
     </p>
    
    </div>
  )
}

export default Aboutus