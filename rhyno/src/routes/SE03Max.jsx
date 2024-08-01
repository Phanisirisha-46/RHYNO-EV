import React from 'react'
import Vehicle_Img2 from '../components/vehicle_img/Vehicle_Img2'
import Spec from '../components/vechicle_spec/Spec'
import ColorPicker from '../components/colorpicker/ColorPicker'
import Spec2 from '../components/vechicle_spec/Spec2'
import BuyNow from '../components/buynow/BuyNow'
import Vehicle_Img2N from '../components/vehicle_img/Vehicle_Img2N'
import IMG1 from '../assets/bf.png'
import Vehicle_Img2Nm from '../components/vehicle_img/Vehicle_Img2Nm'


const SE03Max = () => {
  return (
    <div>
      <Vehicle_Img2Nm/>
      <div className="ap-maindiv vehicleinfo">
        <div className="ap-textdiv">
          {/* <h1>About Us</h1> */}
          <p>
          This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 120 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.
 </p>
        </div>
      </div>
      <div className="example"><Spec w="2000W" tops="65" range="120" battery="2.7" imges={IMG1}/></div>
      <div className="responsivediv"><Spec2 w="2000W" tops="65" range="120" battery="2.7" imges={IMG1}/></div>
      
      <ColorPicker/>
      <BuyNow/>
    </div>
  )
}

export default SE03Max
