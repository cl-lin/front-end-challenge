import React from 'react';
import DropdownMenu from "./DropdownMenu"
import NavbarMenu from "./NavbarMenu"
import './Navbar.css'
import logo from '../../images/logo.svg'

export default function Navbar (props) {

    return (
        <nav className="navbar nav-flex" data-testid="navbar-test">

                 <img className="logo-img" src={logo} alt="logo"/>
                <div>
                    <NavbarMenu user={props.user} checkUser={props.checkUser}/> 
                </div>

                <div className="dropdown-position">
                    <DropdownMenu user={props.user} checkUser={props.checkUser}/>
                </div>
        </nav>
    )
}