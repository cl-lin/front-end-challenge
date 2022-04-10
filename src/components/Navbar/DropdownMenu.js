// import arrow from '../../images/icon-arrow.svg'
import { ReactComponent as Arrow } from '../../images/icon-arrow.svg'
import { ReactComponent as UpArrow } from '../../images/icon-arrow-up.svg'
import React, {useState} from 'react';
import DropdownItem from "./DropdownItem"


export default function DropdownMenu (props) {

    // makes dropdown menu open/sclose
    const [open, setOpen] = useState(false);
    const [arrow, setArrow] = useState(false);

 function toggleDropdown() {
     setOpen(false)
 }
        return (
            <>
            {
                (
                    props.user === true
                        ?  <a href className="nav-link email-add" onClick={() => setOpen(!open)}>teacher@school.org </a> 
                        :   <a  href className="nav-link email-add" onClick={() => setOpen(!open)}>student@school.org </a>
                )
            }
            {
                open === false
                    ? <Arrow className="arrow" onClick={() => setArrow(true)}/>
                    : <UpArrow className="arrow" onClick={() => setArrow(false)}/>
            }
                {open === true
                    ? <DropdownItem user={props.user} checkUser={props.checkUser} toggleDropdown={toggleDropdown}/>  
                    : null
                }
            </>
        )
    }