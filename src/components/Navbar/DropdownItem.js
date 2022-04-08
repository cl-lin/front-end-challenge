import './Navbar.css'

export default function DropdownItem(props) {
    console.log('DropdownItem', props)

    const ifTeacher = () => {
        props.ifTeacher(false)
    }

    const ifStudent = () => {
        props.ifStudent(true)
    }

    return (
        <section className="menu menu-box">
            <div className="menu-item menu-divider item-top">
            {
                (
                props.user === true
                ? <a className="dropdown-link" onClick={ifTeacher} >student@school.org</a>
                : <a className="dropdown-link" onClick={ifStudent} >teacher@school.org</a>
                )
            }
            </div>
            <div className="menu-item">
                Settings
            </div>
            <div className="menu-item">
                Sign Out
            </div>
        </section>

    )

}
