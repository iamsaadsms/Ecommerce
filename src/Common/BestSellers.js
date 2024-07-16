import React, { useState, useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import './BestSellers.css';
import QuickAdd from './QuickAdd';
import s1 from '../Media/s1.jpg';
import s2 from '../Media/s2.jpg';
import s3 from '../Media/s3.jpg';
import s4 from '../Media/s4.jpg';
import s5 from '../Media/s5.jpg';
import s6 from '../Media/s6.jpg';
import CartBtn from './CartBtn';

const imageMap = {
  "/media/s1.jpg": s1,
  "/media/s2.jpg": s2,
  "/media/s3.jpg": s3,
  "/media/s4.jpg": s4,
  "/media/s5.jpg": s5,
  "/media/s6.jpg": s6
};

const BestSellers = ({ imgs, perPage, head, className, style }) => {
  const splideRef = useRef(null);
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current, {
      type: 'loop',
      perPage: perPage,
      perMove: 1,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, [perPage]);

  const addToCartHandler = (img, name, price) => {
    setSelectedItem({ img, name, price });
    setShowQuickAdd(true);
  };

  return (
    <div className='best-sellers'>
      <div className='splide-head'>
        <span className='s-head'>{head}</span>
      </div>
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <div className="splide__list">
            {imgs.map((item, idx) => (
              <div className="splide__slide" key={idx}>
                <img src={imageMap[item.pic]} alt={`Slide ${idx}`} className='img-splide' style={style}/>
                <CartBtn img={item.pic} name={item.name} price={item.price} onAddToCart={addToCartHandler} className={className} />
                <div className='details'>
                  <span className='name'>{item.name}</span>
                  <span className='price'>RS {item.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showQuickAdd && (
        <QuickAdd
          img={selectedItem.img}
          name={selectedItem.name}
          price={selectedItem.price}
          onClose={() => setShowQuickAdd(false)}
        />
      )}
    </div>
  );
};

export default BestSellers;
