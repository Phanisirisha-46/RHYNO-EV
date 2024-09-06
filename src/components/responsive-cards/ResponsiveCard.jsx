import React from 'react'
import './ResponsiveCard.css'
import { Link } from 'react-router-dom'
import InsurPage from '../../assets/solution.png'
import IMG1 from '../../assets/battery.png'
import IMG2 from '../../assets/best-customer-experience.png'
import IMG3 from '../../assets/bar-chart.png'
import IMG4 from '../../assets/solution.png'
import IMG5 from '../../assets/tyre.png'


const ResponsiveCard = () => {
  return (
    <div style={{padding: '100px 0 0'}}>
        {/* <div id="intern_pro" > */}
        {/* <div className="intern_pro" style={{padding: '70px 1rem'}}>
            <div className="intern_pro_img">
                <img src={InsurPage} alt="" />
            </div>
            <div className="intern_pro_info">
                <span>Secure your Drones</span>
                <h1>Drone Insurance Tailored to Your Specific Needs</h1>
                <p>Our drone insurance policies provide coverage for both commercial and personal use of drones, and we offer a variety of coverage options to meet your specific needs. Whether you need coverage for a single drone or an entire fleet, we can help you find the policy that fits your needs and budget.</p>
                
                <div className="uni_btn">
                        <Link to='/insuaranceForm' className='uni_button'>Contact us</Link>
                    </div>
            </div>
        </div> */}
    {/* </div> */}
        <div className="di-covered">
            {/* <h1>What is Covered?</h1> */}
            <h1 className="hs-h1h1">What Makes <span className='yellow'>RHYNO</span> Awesome</h1>
            <div className="di-coveredin">
                <div className="di-partone">
                    <img src={IMG1} alt="" />
                    <h3>LFP Battery</h3>
                    <p>Equipped with advanced Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances RHYNO's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance.</p>
                </div>

                <div className="di-partone">
                    <img src={IMG5} alt="" />
                    <h3>Wider tyres</h3>
                    <p>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand roads.</p>
                </div>

                <div className="di-partone">
                    <img src={IMG3} alt="" />
                    <h3>Range prediction</h3>
                    <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With RHYNO, you can ride with peace of mind, which provides precise information about the remaining battery.</p>
                </div>

                <div className="di-partone">
                    <img src={IMG2} alt="" />
                    <h3>Extraordinary Experience</h3>
                    <p>RHYNO is more than just a mode of transportation. It's an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication and a touch of masculinity! This experience is enhanced further with lower CG, which makes your RHYNO ultra-lightweight as if you are riding on a feather!</p>
                </div>


                <div className="di-partone">
                    <img src={IMG4} alt="" />
                    <h3>Rugged and simple Design</h3>
                    <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, spending weeks and months at service stations for complex repairs. We took the bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home!</p>
                </div>
            </div>
        </div>









        {/* <div className="di-covered">
            <h1>Requirements</h1>
            <div className="di-coveredin">
                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_register.svg" alt="" />
                    <h3>Drone Registration</h3>
                    <p>Your drone should be registered with DGCA and have a UIN</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_invoice.svg" alt="" />
                    <h3>Invoice Values & Invoice</h3>
                    <p>The drone you want to get covered should have a purchase invoice</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_purchase.svg" alt="" />
                    <h3>Purchased within 3 Years</h3>
                    <p>Your drone to be covered should be purchased on or after 2019</p>
                </div>

                <div className="di-partone">
                    <img src="https://tropogo.com/insurance/assets/images/home/ic_drone_images.svg" alt="" />
                    <h3>Drone Images</h3>
                    <p>Latest Images of your drone</p>
                </div>
            </div>


        </div>




        <h1 className='h1h1'>Why get your Drone Cover from US?</h1>

        
        <div className="di-whyus">
            <div className="di-boxone">
                <img src="https://tropogo.com/insurance/assets/images/home/ic_drone_insurance.svg" alt="" />
                <h2>Comprehensive Coverage</h2>
                <p>When you get your drone insurance from us, you can expect comprehensive coverage that protects you against various risks and liabilities.</p>
                <small>We Bond with the Best!</small>
            </div>

            <div className="di-boxone">
                <img src="https://tropogo.com/insurance/assets/images/home/ic_less_sales.svg" alt="" />
                <h2>Responsive Claims Handling</h2>
                <p>In the unfortunate event of a claim, our dedicated claims handling team is here to provide prompt and efficient assistance.</p>
                <small>We Bond with the Best!</small>
            </div>

            <div className="di-boxone">
                <img src="https://tropogo.com/insurance/assets/images/home/ic_lowest_premium.svg" alt="" />
                <h2>Competitive Pricing</h2>
                <p>We strive to offer competitive pricing for our drone insurance policies.</p>
                <small>We Bond with the Best!</small>
            </div>

            <div className="di-boxone">
                <img src="https://tropogo.com/insurance/assets/images/home/ic_insurance+.svg" alt="" />
                <h2>Risk Management Support</h2>
                <p>Beyond insurance coverage, we provide risk management support to help you mitigate and minimize potential risks.</p>
                <small>We Bond with the Best!</small>
            </div>
        </div> */}
    </div>
  )
}

export default ResponsiveCard