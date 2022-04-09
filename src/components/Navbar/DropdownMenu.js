// import arrow from '../../images/icon-arrow.svg'
import { ReactComponent as Arrow } from '../../images/icon-arrow.svg'
import { ReactComponent as UpArrow } from '../../images/icon-arrow-up.svg'
import React, {useState} from 'react';
import DropdownItem from "./DropdownItem"


export default function DropdownMenu (props) {
    // makes dropdown menu open/sclose
    const [open, setOpen] = useState(false);

 function toggleDropdown() {
     setOpen(false)
 }

        return (
            <>
            {
            (
                props.user === true
                ? <a className="nav-link email-add" onClick={() => setOpen(!open)}>teacher@school.org</a>
                : <a className="nav-link email-add" onClick={() => setOpen(!open)}>student@school.org</a>
            )
            }
                <Arrow className="arrow"/>
                {open === true
                    ? 
                        <DropdownItem user={props.user} checkUser={props.checkUser} toggleDropdown={toggleDropdown}/>
                    :
                        null
                }
            </>
        )
    }