import './Navbar.css'

export default function DropdownItem(props) {
    console.log('DropdownItem', props)

const checkUser = () => {
    props.checkUser()
}

    return (
        <section className="menu menu-box">
            <div className="menu-item menu-divider item-top">
            {
                (
                props.user === true
                ? <a className="dropdown-link" onClick={checkUser} >student@school.org</a>
                : <a className="dropdown-link" onClick={checkUser} >teacher@school.org</a>
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
