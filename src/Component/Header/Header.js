import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <nav>
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/blog">Blog</a>
            </nav>
            <div className='header-details container'>
                <h1>Hire Your Teacher</h1>
                <p>This is a largest tuition media all over of Bangladesh. It helps parents to find there best tutor and also help tutors for find tution."</p>
                <h2>Teacher Total Salary $10000</h2>
            </div>

        </div>
    );
};

export default Header;