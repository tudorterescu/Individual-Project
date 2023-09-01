
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css";
import axios from 'axios';

const curruser = "http://localhost:3001/users";


export const Navbar = () => {
    const [activeuser, setActiveUser] = useState(null);
    
    useEffect(()=>{
        axios.get(curruser).then((response)=>{
            const user = response.data.filter((users)=> users.id === 1);
            setActiveUser(user)
        })
    })

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
                </div>
                {activeuser && (
                    <div className='user-info'>
                        <p>{activeuser.first_name} {activeuser.last_name}</p>
                    </div>
                )}
            </nav>

        </div>
    );
};

export default Navbar;


