import React from 'react';
import navImg from '../../assets/food.webp'

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className='nav-left'>
                <img src={navImg} alt="" />
                <h2>Meal Hub</h2>
            </div>

            <div className='nav-right'>
                <p>Home</p>
                <p>Blogs</p>
                <p>About</p>
                <p>Orders</p>
                <p>Contact</p>
            </div>

        </nav>
    );
};

export default Navbar;