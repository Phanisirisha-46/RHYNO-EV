import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import './Rotate.css'
import IMG1 from '../../assets/battery.png'
import IMG2 from '../../assets/best-customer-experience.png'
import IMG3 from '../../assets/bar-chart.png'
import IMG4 from '../../assets/solution.png'
import IMG5 from '../../assets/tyre.png'
import SlowScroll from "./SlowScroll";


const Example = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  // Listen for resize events
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["200%", "-130%"]);

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Swipe left logic
    },
    onSwipedRight: () => {
      // Swipe right logic
    },
  });

  return (
    <div>
      <h1 className="hs-h1h1">What Makes <span className='yellow'>RHYNO</span> Awesome</h1>
    <section ref={targetRef} className="hs-one" {...(isMobile && handlers)}>
      <div className="hs-two" >
        <motion.div style={{ x }} className="hs-three">
          {cards.map((card) => {
            return <Card card={card} key={card.id} isMobile={isMobile} />;
          })}
        </motion.div>
      </div>
      
    </section>
    </div>
  );
};

const Card = ({ card, isMobile }) => {
  return (
    <div
      key={card.id}
      className={`hs-four ${isMobile ? 'mobile' : ''}`} // Add a class for mobile styling
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hs-five"
      >
        <div className="overlay">
          <img src={card.icon} alt="Icon" className="r-icon" />
          <h3 className="r-title">{card.title}</h3>
          {/* <p className="subtitle">{card.subtitle}</p> */}
        </div>
      </div>
      <div className="hs-six">
        <p className="hs-seven">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "../../assets/1.png",
    icon: IMG1,
    title: "LFP Battery",
    subtitle: "Subtitle 1",
    description: "Equipped with advanced Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances RHYNO's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance.",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: IMG5,
    title: "Wider tyres",
    subtitle: "Subtitle 1",
    description: "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand roads.",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: IMG3,
    title: "Range prediction",
    subtitle: "Subtitle 1",
    description: "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With RHYNO, you can ride with peace of mind, which provides precise information about the remaining battery.",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: IMG2,
    title: "Extraordinary Experience",
    subtitle: "Subtitle 1",
    description: "RHYNO is more than just a mode of transportation. It's an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication and a touch of masculinity! This experience is enhanced further with lower CG, which makes your RHYNO ultra-lightweight as if you are riding on a feather!",
    id: 1,
  },
  {
    url: "/imgs/abstract/1.jpg",
    icon: IMG4,
    title: "Rugged and simple Design",
    subtitle: "Subtitle 1",
    description: "We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, spending weeks and months at service stations for complex repairs. We took the bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home!",
    id: 1,
  },
];