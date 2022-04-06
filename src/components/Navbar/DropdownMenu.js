// import arrow from '../../images/icon-arrow.svg'
import { ReactComponent as Arrow } from '../../images/icon-arrow.svg'
import React, {useState} from 'react';
import DropdownItem from "./DropdownItem"

export default function DropdownMenu () {
    const [open, setOpen] = useState(false);

    console.log('dropdown')
        return (
            <>
                <a className="nav-link email-add" onClick={() => setOpen(!open)}>teacher@school.org</a>
                <Arrow className="arrow"/>
                {open === true && 
                <DropdownItem />
                }
            </>
        )
    }