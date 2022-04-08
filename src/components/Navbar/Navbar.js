import React from 'react';
import DropdownMenu from "./DropdownMenu"
import NavbarMenu from "./NavbarMenu"
import './Navbar.css'
import logo from '../../images/logo.svg'
// import arrow from '../../images/icon-arrow.svg'

export default function Navbar (props) {

    console.log('Navbar', props)
    return (
        <nav className="navbar nav-flex">

                 <img className="logo-img" src={logo} alt="logo"/>
            <div>
                 <NavbarMenu user={props.user} ifTeacher={props.ifTeacher} ifStudent={props.ifStudent}/> 
            </div>

            <div className="dropdown-position">
                <DropdownMenu user={props.user} ifTeacher={props.ifTeacher} ifStudent={props.ifStudent}/>
            </div>
        </nav>
    )
}