import React from 'react'
import './style.css'
import { IoIosHome, IoMdNotifications } from "react-icons/io";
import { FaBookmark, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="nav-center">
                <h2 onClick={() => navigate('/')}>TravelsMedia.in</h2>
                <ul className="pages">
                    <NavLink to='/' activeClassName="active"><IoIosHome /></NavLink>
                    <NavLink to='/notification' activeClassName="active"><IoMdNotifications /></NavLink>
                    <NavLink to='/item/' activeClassName="active"><FaBookmark /></NavLink>
                    <NavLink to='/contact' activeClassName="active"><FaUser /></NavLink>
                </ul>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar