import './Navbar.css'

export default function DropdownItem(props) {
    console.log('DropdownItem', props)

const ifTeacher = () => {
    props.ifTeacher(false)
}
    return (
        <section className="menu menu-box">
            <div className="menu-item menu-divider item-top">

                <a className="dropdown-link" onClick={ifTeacher} >student@school.org</a>
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
