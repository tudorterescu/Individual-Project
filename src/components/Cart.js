import "./Cart.css";
import { Link } from 'react-router-dom';

import React from 'react';



const Cart = ({ cartItems, updateCart }) => {
  console.log('got items in', cartItems);




  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updateCart(updatedCart);
  };

  if (!cartItems || cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const totalPrice = cartItems.reduce((total, product) => total + product.price, 0);

  return (
    <div className='CartContainer'>
      <h1>Your Cart</h1>
      <Link to='/checkout'>
        <button className='checkoutstore'>Checkout</button>
      </Link>
      <div className='CartItems'>
        {cartItems.map((product) => (
          <div key={product.id} className='CartItem'>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Price: {product.price}</p>
            <button className='cartbutton' onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>


      <div className='CartTotal'>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
