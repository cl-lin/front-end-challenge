export default function NavbarMenu (props) {
    console.log('NavbarMenu ', props.user)
    const condition =props.user
        return (
            <>
                { condition === true 
                    ?
                        (<ul>
                            <li><a className="class-link" href="/">Class</a></li>
                            <li><a className="nav-link" href="/">Lessons</a></li>
                            <li><a className="nav-link" href="/">Libraries</a></li>
                        </ul>)
                    : 
                        <h1>test</h1>
                }
            </>
        )
}