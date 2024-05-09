import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand navbar-menu">
        <div className="navbar-start tabs is-medium is-toggle mt-3">
          <div className="navbar-item is-active">
            <Link to={"./pets"}>Pets</Link>
          </div>
          <div className="navbar-item is-active">
            <Link to={"./mypetprofiles"}>My Pet Profiles</Link>
          </div>
          <div className="navbar-item is-active">
            <Link to={"./favorites"}>My Favorites</Link>
          </div>
          <div className="navbar-item is-active">
            <Link to={"./profile"}>Profile</Link>
          </div>
        </div>
        <div className="navbar-end tabs is-medium is-toggle ">
          {localStorage.getItem("pawfect_token") ? (
            <div className="navbar-item is-active">
              <Link
                to="./login"
                onClick={() => {
                  localStorage.removeItem("pawfect_token");
                  navigate("/login", { replace: true });
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};
