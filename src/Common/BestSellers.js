import React, { useState, useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import './BestSellers.css';
import QuickAdd from './QuickAdd';
import CartBtn from './CartBtn';

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
              <div className="splide__slide" key={idx} style={{position: 'relative'}} >
                <img src={item.pic} alt={item.pic} className='img-splide' style={style} />
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
