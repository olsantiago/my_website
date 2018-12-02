import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './css/navbar.css';



class Navbar extends Component {
    
    render() {
        
        return (
            <div id='cssmenu'>
            <ul>
            <li><NavLink to='/about' className='Menu-item'><span>About</span></NavLink></li>
            <li><NavLink to='/portfolio' className='Menu-item'><span>Portfolio</span></NavLink></li>
            <li><NavLink to='/contact' className='Menu-item'><span>Contact</span></NavLink></li>
            </ul>
            </div>   
        );
    }
}

export default Navbar;