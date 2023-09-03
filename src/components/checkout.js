import React, { useState } from 'react';
import axios from 'axios'; 
import './checkout.css';

const Checkout = ({ cartItems, updateCart }) => {
  const [confirmation, setConfirmation] = useState(false);

  const handleCheckout = () => {
   console.log("got items in", cartItems);


    const order_items = cartItems.map((item) => ({
      product_id: item.id,
      quantity: 1, 
      price: item.price,
    }));


    const order = {
      id: Date.now(), 
      user_id: 1, 
      order_date: new Date().toISOString(),
      order_status: 'pending',
      order_total: cartItems.reduce((total, item) => total + item.price, 0),
      order_items,
    };


    axios.post('/orders', order) 
      .then(() => {
        updateCart([]); 
        setConfirmation(true);
        console.log("items posted");
      })
      .catch((error) => console.error('Error:', error));
      
  
    }
  let content;
  if (confirmation) {
    content = <p>Your items have been checked out.</p>;
    console.log("items posted here", content)
  } else {
    content = (
      <div className="CheckoutItems">
        {cartItems.map((product) => (
          <div key={product.id} className="CheckoutItem">
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
          </div>
        ))}
        <button className="checkoutButton" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    );
  }
  
  return (
    <div className="CheckoutContainer">
      <h1>Checkout</h1>
      {content}
    </div>
  );
  
};

export default Checkout;
