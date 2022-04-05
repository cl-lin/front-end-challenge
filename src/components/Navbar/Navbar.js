import React from 'react';
// import DropdownMenu from "./DropdownMenu"
import NavbarMenu from "./NavbarMenu"
import './Navbar.css'
import logo from '../../images/logo.svg'

export default function Navbar () {
console.log('navbar')
    return (
        <nav className ="navbar">
            <section className ="flex-container">
            <div className="logo">
                <img className="logo-img" src={logo} alt="logo"/>
            </div>
            <div>
            <ul>
                {NavbarMenu.map((menu, index) => {
                    return (
                        <li key ={index}>
                            <a className={menu.className} href={menu.url}>
                                {menu.title}
                            </a>
                        </li>
                    )
                }) }
            </ul>
            </div>
                </section>

        </nav>
    )
}