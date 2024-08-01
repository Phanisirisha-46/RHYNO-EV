import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Spec.css'
import { MdOutlineOfflineBolt } from "react-icons/md";
import { PiPersonSimpleBikeFill } from "react-icons/pi";
import { PiBatteryHighBold } from "react-icons/pi";
import { MdOutlineEarbudsBattery } from "react-icons/md";
import { RxColorWheel } from "react-icons/rx";
import { RiEBike2Line } from "react-icons/ri";
import IMG1 from '../../assets/12.png'
import bolt from '../../assets/flash.png'
import battery from '../../assets/lighting.png'
import scooter from '../../assets/scooter.png'
import scooter1 from '../../assets/scooter1.png'
import wheel from '../../assets/wheel.png'
import charger from '../../assets/charger.png'


const Spec2 = (props) => {
    // useEffect(() => {
    //     Aos.init({
    //         duration:600,
    //         easing:"ease",
    //         once:true,
    //     });
    // });
  return (
    <div>
      <div className="spec-maindiv"> 
        <div className="spec-info1" >
            <div className="spec-inside">
            <img src={bolt} alt="" className='spec-icon'/>
        <p>Power</p>
        <p className='spec-grey'>Elevate your journey with the dynamic {props.w} motor power!</p>
            </div>

            <div className="spec-inside">
            <img src={battery} alt="" className='spec-icon'/>
        <p>Battery </p>
        <p className='spec-grey'>{props.battery} illuminates sustainability in small packages!</p>
            </div>

            <div className="spec-inside">
            <img src={scooter} alt="" className='spec-icon'/>
        <p>Range</p>
        <p className='spec-grey'>Unleash freedom with ranges stretching to an electrifying {props.range}km!</p>
            </div>
        </div>

        <div className="spec-centerimg">
            <img src={props.imges} alt="" />
        </div>

        <div className="spec-info2" >
            <div className="spec-inside">
            <img src={scooter1} alt="" className='spec-icon'/>
        <p>Comfort</p>
        <p className='spec-grey'>Indulge in comfort, revel in stability, and embrace safety.</p>
            </div>

            <div className="spec-inside">
            <img src={wheel} alt="" className='spec-icon'/>
        <p>Speed</p>
        <p className='spec-grey'>Experience the thrill with Max speed soaring at {props.tops} kmph!</p>
            </div>

            <div className="spec-inside">
            <img src={charger} alt="" className='spec-icon'/>
        <p>Charge</p>
        <p className='spec-grey'>Revitalize your ride with a swift 4-hour (12A) charge!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Spec2
