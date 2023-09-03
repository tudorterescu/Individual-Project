import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./HomeandGarden.css"


const HGproduct = '/products';

export const HomeAndGarden = ({cart,updateCart}) => {
    console.log('got items in HG', cart); //Testing items made it into the cart
    
    const [homeandgardenProducts, sethomeandgardenProducts] = useState([]);

    useEffect(() => {
      axios.get(HGproduct).then((response) => {
          const HomeProducts = response.data.filter((product) => product.category === 'home-and-garden'); //filtering out the jewellery products
          sethomeandgardenProducts(HomeProducts);
      });
  }, []);
  
  const addToCart = (product) => {
    console.log('adding items to cart', cart);//Cart addition method making sure to check that items actually make it to the cart and that it is concurrently updated
    const updatedCart = [...cart, product]; 
    updateCart(updatedCart);
  };

    return (
        <div className='HGshop'>

            <div className='ProductsHG'>
                {homeandgardenProducts.map((product) => (
                    <div key={product.id} className='HGproduct'>
                        <h2>{product.title}</h2>
                        <p>{product.body}</p>
                        <p>Category: {product.category}</p>
                        <p>Vendor: {product.vendor}</p>
                        <p>Tags: {product.tags.join(', ')}</p>
                        <p>Inventory: {product.inventory}</p>
                        <p>Price: {product.price}</p>
                        <img src ={product.image} alt={product.title}/>
                        <button className='HGbutton' onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
              
            </div>
        </div>
    );
};

export default HomeAndGarden;
