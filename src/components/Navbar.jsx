import { Link, useNavigate } from "react-router-dom"


export const Navbar = () => {

    const navigate = useNavigate()


    return(
        <div className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to={"./pets"}>Pets</Link>
                </li>
                <li>
                    <Link to={"./mypetprofiles"}>My Pet Profiles</Link>
                </li>
                <li>
                    <Link to={"./favorites"}>My Favorites</Link>
                </li>
                <li>
                    <Link to={"./profile"}>Profile</Link>
                </li>
                {localStorage.getItem("pawfect_token") ? (
                    <li className="navbar-item">
                        <Link
                        to="./login"
                        className="navbar-link"
                        onClick={() => {
                            localStorage.removeItem("pawfect_token")
                            navigate("/login", { replace: true })
                        }}
                        >
                        Logout
                        </Link>
                    </li>
                    ) : (
                    ""
                    )}
            </ul>
        </div>
        )
}