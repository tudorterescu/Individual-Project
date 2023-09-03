import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Jewellery.css"


const jewelleryproduct = '/products';

export const Jewelleryshop = ({cart,updateCart}) => {
    console.log('got items in jewellery', cart); //Testing items made it into the cart
    const [jewelleryProducts, setjewelleryProducts] = useState([]);

    useEffect(() => {
      axios.get(jewelleryproduct).then((response) => {
          const jewlProducts = response.data.filter((product) => product.category === 'jewellery'); //filtering out the jewellery products
          setjewelleryProducts(jewlProducts);
      });
  }, []);
  
  const addToCart = (product) => {
    console.log('adding items to cart', cart);
    const updatedCart = [...cart, product]; //Cart addition method making sure to check that items actually make it to the cart and that it is concurrently updated
    updateCart(updatedCart);
  };

    //decided not to display the body information for jewellery as it can overextend and makes the items look messy.
    return (
        <div className='jewelleryshop'>

            <div className='Productsjewellery'>
                {jewelleryProducts.map((product) => (
                    <div key={product.id} className='jewproduct'> 
                        <h2>{product.title}</h2>
                        <p>Category: {product.category}</p>
                        <p>Vendor: {product.vendor}</p> 
                        <p>Tags: {product.tags.join(', ')}</p>
                        <p>Inventory: {product.inventory}</p>
                        <p>Price: {product.price}</p>
                        
                        <img className='jewelleryimage' src ={product.image} alt={product.title}/>
                        <button className='jewbutton' onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
               
            </div>
        </div>
    );
};

export default Jewelleryshop;
