import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/reducers/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth);
    const handleLogout = () =>{
      dispatch(logOut())
    }
    const navMenu = <>
        <li>{auth.isLogin ? <span onClick={handleLogout}>Logout</span> : <Link to='/login'>Login</Link>}</li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>;
  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navMenu}
              </ul>
            </div>
            <Link to='/'><span className="btn btn-ghost normal-case text-xl">Test</span></Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {navMenu}
            </ul>
          </div>
          <div className="navbar-end">
            <p className="btn">Get started</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
