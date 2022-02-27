import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1><Link to="/">To Do!</Link></h1>
            <div className="links">
                <Link to="/users/signup">Sign Up</Link>
                <Link to="/users/login">Log In</Link>
            </div>
        </div>
    );
}
 
export default Navbar;