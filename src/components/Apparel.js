import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './Apparel.css';


const Apparelproduct = '/products';

    export const Apparel = ({ cart, updateCart }) => {
        console.log('got items in apparel', cart);//Testing items made it into the cart
        const [apparelProducts, setApparelProducts] = useState([]);
  
    useEffect(() => {
      axios.get(Apparelproduct).then((response) => {
        const appProducts = response.data.filter((product) => product.category === 'apparel'); //filtering out the apparel products
        setApparelProducts(appProducts);
      });
    }, []);
  
    const addToCart = (product) => {
        console.log('adding items to cart', cart);
        const updatedCart = [...cart, product]; //Cart addition method making sure to check that items actually make it to the cart and that it is concurrently updated
        updateCart(updatedCart);
      };

  return (
    <div className='Apparelshop'>

      <div className='Productsapparel'>
        {apparelProducts.map((product) => (
          <div key={product.id} className='appproduct'>
                        <h2>{product.title}</h2>
                        <p>{product.body}</p>
                        <p>Category: {product.category}</p>
                        <p>Vendor: {product.vendor}</p>
                        <p>Tags: {product.tags.join(', ')}</p>
                        <p>Inventory: {product.inventory}</p>
                        <p>Price: {product.price}</p>
                        <img src ={product.image} alt={product.title}/>
            <button className='appbutton' onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Apparel;
