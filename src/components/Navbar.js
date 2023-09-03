import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";
import axios from 'axios';

const curruser = "/users";


export const Navbar = () => {
    const [activeuser, setActiveUser] = useState(null);

    
  useEffect(() => {
    axios.get(curruser).then((response) => {
      const user = response.data.find((user) => user.id === 1); //find in order to be able to search via number id
      setActiveUser(user);
    });
  }, []);

  let userContent = null; 

  if (activeuser) {
    userContent = (
      <div className='user-info'>
        <p>Welcome {activeuser.first_name} {activeuser.last_name}</p>
      </div>
    );
  }

    return (
        <div>
            <nav className='Navbar'>
                <div className='navbar-container'>
                    <Link to='/Jewelleryshop'>Jewellery</Link>
                    <Link to='/Apparel'>Apparel</Link>
                    <Link to='/HomeAndGarden'>Home And Garden</Link>
                    
                    <Link to='/Cart'>
                        <ShoppingCart size={32} />
                    </Link>
                    {userContent}
                </div>


            </nav>

        </div>
    );
};

export default Navbar;


