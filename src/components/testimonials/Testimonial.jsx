// import React from 'react'
// import './Testimonial.css'
// import image from '../../assets/Logo.png'
// import { useState } from 'react'

// const Testimonial = () => {
//   const testimonial_data = [
//     {
//       img:image,
//       content_text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure architecto adipisci enim debitis voluptates!",
//       testimonial_name:"John Doe",
//       text_back:"lorem",
//     },
//     {
//       img:image,
//       content_text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure architecto adipisci enim debitis voluptates!",
//       testimonial_name:"John Doe",
//       text_back:"lorem",
//     },
//     {
//       img:image,
//       content_text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure architecto adipisci enim debitis voluptates!",
//       testimonial_name:"John Doe",
//       text_back:"lorem",
//     },
//   ]

//   const [current,setCurrent] = useState(0);
//   return (
//     <section className='flex h-[100vh] justify-center items-center'>
//     <div>
//       {
//         testimonial_data.map((item,index) => index === current && <div key={index}>
//           <div className='pb-[20px] flex items-start gap-4'>
//             <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg" alt="" />
//             <h2 className='text-3xl font-bold'>{item.content_text}</h2></div>
//           <div className='flex gap-4 items-center'>

//           <div className='tm-img'>
//             <img src={item.img} alt="" />
//           </div>
//           <div>
//             <h6>{item.testimonial_name}</h6>
//             <span>{item.text_back}</span>
//           </div>
//           <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584ac8595f0e43b2b576_Vector-1.svg" alt="" />
//           <img src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584a5ceaed4f77de60cb_Vector.svg" alt="" />
//           </div>
//         </div>
//         )
//       }
//     </div>
//     </section>
//   )
// }

// export default Testimonial
