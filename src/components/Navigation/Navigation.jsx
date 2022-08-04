import React from 'react';
import { FaUsers, FaCoffee, FaComments, FaMugHot } from 'react-icons/fa';
import { RiLogoutBoxFill } from 'react-icons/ri'
import { auth } from 'firebase';
import { NavLink } from 'react-router-dom';
import "../../Styles/styles.css"


const Navigation = ({handleLogout}) => {
    const { currentUser } = auth()
    return (
        <div className="navigation" style={{display:'flex', flexWrap:'wrap'}}>
            <div className="waveCafe">
                <FaCoffee id="coffee1"/>
                Wave Cafe
            </div>
            <NavLink  style={{textDecoration:'none', color:'#099'}} to="/">
            <div className="menu">
                <FaMugHot className="icon"/>
                Drink Menu
            </div>
            </NavLink>

            <div className="about_us">
                <FaUsers className="icon"/>
                About Us
            </div>

            <div onClick={handleLogout} className="items">
                <RiLogoutBoxFill className="icon"/>
                Logout
            </div>
            
            <div className="contacts">
                <FaComments className="icon"/>
                Contact
            </div>
        </div>
    );
};

export default Navigation;