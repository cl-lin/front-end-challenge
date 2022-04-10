export default function NavbarMenu (props) {

    const isTeacher =props.user
    
    return (
        <>
            { isTeacher === true 
                ?
                    (<ul>
                        <li><a className="class-link" >Class</a></li>
                        <li><a className="nav-link" >Lessons</a></li>
                        <li><a className="nav-link" >Libraries</a></li>
                    </ul>)
                :   
                    (<ul>
                        <li><a className="class-link" >Class</a></li>
                        <li><a className="nav-link" >Assignments</a></li>
                    </ul>)
            }
        </>
    )
}