import React from 'react';
import './Carousel.css';

const USPItems = [
  {
    title: "LFP Battery",
    description: "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!"
  },
  {
    title: "Wider Tyres",
    description: "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand."
  },
  {
    title: "Range Prediction",
    description: "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery."
  },
  {
    title: "Extraordinary Experience",
    description: "Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!"
  },
  {
    title: "Rugged and Simple Design",
    description: "We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not to take a test ride? Click here to locate your nearest dealership or book a test ride at your home!"
  }
];

function Carousel() {
  return (
    <div className='carousel-container'>
      <div className='carousel'>
        {USPItems.map((item, index) => (
          <div className='carousel-item' key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
