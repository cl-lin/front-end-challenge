import './Navbar.css'

export default function DropdownItem(props) {

    function handleCheck() {
        props.checkUser()
        props.toggleDropdown()
    }
    
    return (
        <section className="menu menu-box ">
            <div className="menu-item item-top">
            {
                (
                props.user === true
                ? <a href className="dropdown-link" onClick={handleCheck} >student@school.org</a>
                : <a href className="dropdown-link" onClick={handleCheck} >teacher@school.org</a>
                )
            }
            </div>
            <div className="menu-item menu-divider">
                Settings
            </div>
            <div className="menu-item">
                Sign Out
            </div>
        </section>

    )

}
