import React from 'react'
import Spec from '../components/vechicle_spec/Spec'
import Spec2 from '../components/vechicle_spec/Spec2'
import About from '../components/aboutus/Aboutus'
import ColorPicker from '../components/colorpicker/ColorPicker'
import ScrollToTop from '../components/scrolltotop/ScrollToTop'
import BuyNow from '../components/buynow/BuyNow'
import Vehicle_ImgN from '../components/vehicle_img/Vehicle_ImgN'
import IMG1 from '../assets/rf.png'

const SE03 = () => {
  return (
    <div className='topstart'>
      <Vehicle_ImgN/>
      <div className="ap-maindiv vehicleinfo">
        <div className="ap-textdiv">
          {/* <h1>About Us</h1> */}
          <p>
          Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 1500W motor, it ensures a thrilling ride while still delivering an impressive 150km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 1500W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
 </p>
        </div>
      </div>
      <div className="example"><Spec w="1500W" tops="55" range="150" battery="2.7" imges={IMG1}/></div>
      <div className="responsivediv"><Spec2 w="1500W" tops="55" range="150" battery="2.7" imges={IMG1}/></div>
      
      
      <ColorPicker/>
      <BuyNow/>
    </div>
  )
}

export default SE03
