// import React, { Component }  from 'react';
// import DropdownMenu from "./DropdownMenu"
import NavbarMenu from "./NavbarMenu"
import './Navbar.css'

export default function Navbar () {
console.log('navbar')
    return (
        <nav className ="navbar">
            <div className="logo">
                <img className="logo-img" src= "../../logo.png" alt="logo"/>
            </div>
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
        </nav>
    )
}