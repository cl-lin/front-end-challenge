// import arrow from '../../images/icon-arrow.svg'
import { ReactComponent as Arrow } from '../../images/icon-arrow.svg'
import { ReactComponent as UpArrow } from '../../images/icon-arrow-up.svg'
import React, {useState} from 'react';
import DropdownItem from "./DropdownItem"


export default function DropdownMenu (props) {
    const [open, setOpen] = useState(false);

    console.log('DropdownMenu', props)

        return (
            <>
                <a className="nav-link email-add" onClick={() => setOpen(!open)}>teacher@school.org</a>
                <Arrow className="arrow"/>
                {open === true && 
                <DropdownItem user={props.user} ifTeacher={props.ifTeacher} />
                }
            </>
        )
    }