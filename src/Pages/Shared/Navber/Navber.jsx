import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navber = () => {

       const { user, Logout } = useContext(AuthContext)

       const Links = <>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/About'>About</NavLink></li>
              <li><NavLink to='/Career'>Career</NavLink></li>
              <li><NavLink to='/Login'>Login</NavLink></li>
       </>

       const handleSingOut = () => {
              Logout()
                     .then(() => {
                            alert('Log Out Successfull')
                     })
                     .catch(error => {
                            console.log(error)
                     })
       }

       return (
              <div className="navbar bg-base-100">
                     <div className="navbar-start">
                            <div className="dropdown">
                                   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 className="h-5 w-5"
                                                 fill="none"
                                                 viewBox="0 0 24 24"
                                                 stroke="currentColor">
                                                 <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6h16M4 12h8m-8 6h16" />
                                          </svg>
                                   </div>
                                   <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          {Links}
                                   </ul>
                            </div>
                     </div>
                     <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                   {Links}
                            </ul>
                     </div>
                     <div className="navbar-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-1">
                                   <div className="w-10 rounded-full border border-black">
                                          <img
                                                 alt="Tailwind CSS Navbar component"
                                                 src={userDefaultPic} />
                                   </div>
                            </div>
                            {
                                   user ? <Link to='/'><button onClick={handleSingOut} className="btn rounded-none bg-[#403F3F] text-white px-10">Logout</button></Link> : <Link to='/Login'><button className="btn rounded-none bg-[#403F3F] text-white px-10">Login</button></Link>
                            }
                     </div>
              </div>
       );
};

export default Navber;