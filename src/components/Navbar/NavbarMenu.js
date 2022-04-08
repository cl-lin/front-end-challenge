export default function NavbarMenu (props) {
    console.log('NavbarMenu ', props)
        return (
    <ul>
        <li><a className="class-link" href="/">Class</a></li>
        <li><a className="nav-link" href="/">Lessons</a></li>
        <li><a className="nav-link" href="/">Libraries</a></li>
    </ul>
        )
    }