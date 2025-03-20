import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaTags } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { SiThunderstore } from "react-icons/si";
import { RxLapTimer } from "react-icons/rx";
import { FaMagic } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "../styles/NavBar.css";
import UserContext from "../../context/UserContext";
const NavBar = () => {
  const user = useContext(UserContext);
  return (
    <div className="navbar-container">
      <div className="logo">
        <span>CodeMates.io</span>
        <FaMagic />
      </div>
      <nav className="nav">
        <ul>
          <NavLink className="link" to="/">
            <RxLapTimer /> <p>Latest</p>
          </NavLink>
          <NavLink className="link" to="/top-threads">
            <SiThunderstore /> <p>Top Questions</p>
          </NavLink>
          <NavLink className="link" to="/tags">
            <FaTags />
            <p to="/tags">Tags</p>
          </NavLink>
          {user && (
            <NavLink className="new-thread link" to="/new">
              <FaPlus />
              <p to="/new">New Thread</p>
            </NavLink>
          )}
        </ul>
      </nav>
      {!user && (
        <div className="links">
          <NavLink to="/sign-up" className={({ isActive }) => null}>
            Sign Up
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => null}>
            Login
          </NavLink>
        </div>
      )}
      {user && (
        <div className="links flex gap-4">
          <NavLink to="/me" className="bg-transparent py-1 font-semibold">
            {user.firstName.toUpperCase()}
          </NavLink>
          <NavLink
            to="/logout"
            className="text-3xl text-green font-bold
          "
          >
            <RiLogoutCircleRLine />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
