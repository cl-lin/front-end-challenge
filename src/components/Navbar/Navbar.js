import React from 'react';
import DropdownMenu from "./DropdownMenu"
import NavbarMenu from "./NavbarMenu"
import './Navbar.css'
import logo from '../../images/logo.svg'
import arrow from '../../images/icon-arrow.svg'

export default function Navbar () {
console.log('navbar')
    return (
        <nav className="navbar nav-flex">

                 <img className="" src={logo} alt="logo"/>
            <div>
                 <NavbarMenu /> 
            </div>

            <div>
                <DropdownMenu />
                <img src={arrow} alt="arrowdown"/>
            </div>
        </nav>

        // <nav className ="navbar">
        //     <section className ="flex-container">

        //     <div className="logo">
        //         <img className="logo-img" src={logo} alt="logo"/>
        //     </div>

        //     <div className="nav-link-flex">
        //     <ul>
        //         {NavbarMenu.map((menu, index) => {
        //             return (
        //                 <li key ={index}>
        //                     <a className={menu.className} href={menu.url}>
        //                         {menu.title}
        //                     </a>
        //                 </li>
        //             )
        //         }) }
        //     </ul>
        //     </div> 

        //     <div className="user-flex">
        //         <a href="/">
        //                  <DropdownMenu />
        //                  <img src={arrow} alt="arrowdown"/>
        //         </a>
        //     </div>
        //         </section>
  
        // </nav>
    )
}