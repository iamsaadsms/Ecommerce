import React, { useState } from "react";
import './QuickAdd.css';
import Wrapper from "./Wrapper";
import Button from "./Button";

const QuickAdd = ({ img, name, price, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="quickadd-overlay">
      <div className="quickadd-modal">
        <div className="headers">
          <span className="q-head">Quick Add</span>
          <i className="bi bi-x" onClick={onClose}></i>
        </div>
        <div className="quickadd-data">
          <div className="quick-imgs">
            <img src={img} alt={name} />
          </div>
          <div className="details">
            <div className="item-details">
              <span className="name">{name}</span>
              <span className="price">RS {(price * quantity).toFixed(2)}</span>
            </div>
            <div className="wrapper-btn">
              <Wrapper quantity={quantity} onQuantityChange={handleQuantityChange} />
              <Button data={"ADD TO CART"} />
            </div>
            <div className="full-details">
              <span className="f-details">VIEW FULL DETAILS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickAdd;
