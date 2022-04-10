// import arrow from '../../images/icon-arrow.svg'
import { ReactComponent as Arrow } from '../../images/icon-arrow.svg'
import { ReactComponent as UpArrow } from '../../images/icon-arrow-up.svg'
import React, {useState} from 'react';
import DropdownItem from "./DropdownItem"
import classNames from 'classnames';

export default function DropdownMenu (props) {

    // makes dropdown menu open/close
    const [open, setOpen] = useState(false);
    const [arrow, setArrow] = useState(false);
    console.log(arrow)
    function toggleDropdown() {
        setOpen(false)
    }

    const activeDropdown = classNames("nav-link", {'dropdown-active': open === true})
    
        return (
            <>
                {
                    (
                        props.user === true
                            ?  <a className={activeDropdown} onClick={() => setOpen(!open)}>teacher@school.org </a> 
                            :  <a className={activeDropdown} onClick={() => setOpen(!open)}>student@school.org </a>
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