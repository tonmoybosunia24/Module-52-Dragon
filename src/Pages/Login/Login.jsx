import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

       const {SingInUser} = useContext(AuthContext)
       const location = useLocation()
       const navigate = useNavigate()

       const handleLogin = e =>{
              e.preventDefault()
              const form = new FormData(e.currentTarget)
              const email = form.get('email')
              const password = form.get('password')
              console.log(email, password)
              SingInUser(email, password)
              .then(Result =>{
                     console.log(Result.user)
                     alert("Sing In Successfull")
                     e.target.reset();
                     navigate(location?.state ? location.state : '/')
              })
              .catch(error =>{
                     console.log(error)
              })
       } 

       return (
              <div>
                     <Navber></Navber>
                     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto p-8 mt-5">
                            <h2 className="text-2xl text-center font-semibold pb-5">Login Your Account</h2>
                            <hr className="pb-5 h-2" />
                            <form className="card-body p-0" onSubmit={handleLogin}>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Email Address</span>
                                          </label>
                                          <input type="email" placeholder="Your Email" name="email" className="input input-bordered bg-gray-200" required />
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Password</span>
                                          </label>
                                          <input type="password" placeholder="Password" name="password" className="input input-bordered bg-gray-200" required />
                                          <label className="label mt-2">
                                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                          </label>
                                   </div>
                                   <div className="form-control ">
                                          <button className="btn bg-black text-white">Login</button>
                                   </div>
                                   <p className="text-xs pt-2 text-center">Dont’t Have An Account ? <Link to='/Register' className="text-red-400 font-bold">Register</Link></p>
                            </form>
                     </div>
              </div>
       );
};

export default Login;