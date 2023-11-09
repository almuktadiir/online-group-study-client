import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Home</NavLink>
        </li>
        <li><NavLink
            to="/createAssignments"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Create Assignments</NavLink>
        </li>
        <li><NavLink
            to="/allAssignments"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>All Assignments</NavLink>
        </li>
        <li><NavLink
            to="/myAssignments"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>My Assignments</NavLink>
        </li>
        <li><NavLink
            to="/submittedAssignments"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }>Submitted Assignments</NavLink>
        </li>

    </>

    return (
        <div className="bg-green-300">
            <div className="navbar max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Online Group Study</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        < div className="items-center justify-end md:flex-row flex flex-col">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <div>
                                <p className="text-black mx-1 border-0">{user.displayName}</p>
                            </div>
                            <div>
                                <Link onClick={handleLogOut} className="btn btn-neutral text-xs text-white px-4 border-0">Logout</Link>
                            </div>
                        </div>
                        :
                        <div className="">
                            <ul className="menu menu-horizontal px-1">
                                <li><NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }>Login</NavLink>
                                </li>
                            </ul>
                        </div>
                }
            </div>
        </div>
        </div>
    );
};

export default Navbar;