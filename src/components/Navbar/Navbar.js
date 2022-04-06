import React from 'react';
import DropdownMenu from "./DropdownMenu"
import NavbarMenu from "./NavbarMenu"
import './Navbar.css'
import logo from '../../images/logo.svg'
// import arrow from '../../images/icon-arrow.svg'

export default function Navbar () {
console.log('navbar')
    return (
        <nav className="navbar nav-flex">

                 <img className="logo-img" src={logo} alt="logo"/>
            <div>
                 <NavbarMenu /> 
            </div>

            <div className="dropdown-position">
                <DropdownMenu />
            </div>
        </nav>
    )
}