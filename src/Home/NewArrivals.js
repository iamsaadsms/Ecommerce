// import React, { useState, useEffect, useRef } from 'react';
// import Splide from '@splidejs/splide';
// import './NewArrivals.css';
// import QuickAdd from '../Common/QuickAdd';
// import s1 from '../Media/s1.jpg'
// import s2 from '../Media/s2.jpg'
// import s3 from '../Media/s3.jpg'
// import s4 from '../Media/s4.jpg'
// import s5 from '../Media/s5.jpg'
// import s6 from '../Media/s6.jpg'

// const NewArrivals = ({ imgs }) => {

// let images = [s1, s2, s3, s4, s5, s6]
//   const splideRef = useRef(null);
//   const [showQuickAdd, setShowQuickAdd] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     const splide = new Splide(splideRef.current, {
//       type: 'loop',
//       perPage: 3,
//       perMove: 1,
//     });

//     splide.mount();

//     return () => {
//       splide.destroy();
//     };
//   }, []);

//   const addToCartHandler = (img, name, price) => {
//     setSelectedItem({ img, name, price });
//     setShowQuickAdd(true);
//   };

//   return (
//     <div className='NewArrivals'>
//       <div className='new-head'>
//         <span className='new-head'>NEW ARRIVALS</span>
//       </div>
//       <div ref={splideRef} className="splide">
//         <div className="splide__track">
//           <div className="splide__list">
//             {imgs.map((item, idx) => (
//               <div className="splide__slide" key={idx}>
//                 <img src={images[idx]} alt={`Slide ${idx}`} className='new-img-splide' />
//                 <div className='new-add-to-cart'>
//                   <span className='new-cart' onClick={() => addToCartHandler(item.pic, item.name, item.price)}>ADD TO CART</span>
//                 </div>
//                 <div className='new-details'>
//                   <span className='new-name'>{item.name}</span>
//                   <span className='new-price'>RS {item.price.toFixed(2)}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {showQuickAdd && (
//         <QuickAdd
//           img={selectedItem.img}
//           name={selectedItem.name}
//           price={selectedItem.price}
//           onClose={() => setShowQuickAdd(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default NewArrivals;
