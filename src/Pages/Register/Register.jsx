import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

       const {createUser} = useContext(AuthContext)

       const HandleRegister = e =>{
              e.preventDefault()
              const form  = new FormData(e.currentTarget)              
              const name = form.get('name')
              const photo = form.get('url')
              const email = form.get('email')
              const password = form.get('password')
              createUser(email, password)
              .then(result =>{
                     console.log(result.user)
                     alert('Account Created Successfully')
              })
              .catch(error =>{
                     console.log(error)
              })
       }

       return (
              <div>
                     <Navber></Navber>
                     <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl m-auto p-8 mt-5 mb-10">
                            <h2 className="text-2xl text-center font-semibold pb-5">Register Your Account</h2>
                            <hr className="pb-5 h-2" />
                            <form className="card-body p-0" onSubmit={HandleRegister}>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Your Name</span>
                                          </label>
                                          <input type="text" placeholder="Your Name" name="name" className="input input-bordered bg-gray-200 text-sm" required />
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Photo Url</span>
                                          </label>
                                          <input type="text" placeholder="Your Photo Url" name="url" className="input input-bordered bg-gray-200 text-sm" required />
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Email Address</span>
                                          </label>
                                          <input type="email" placeholder="Your Email" name="email" className="input input-bordered bg-gray-200 text-sm" required />
                                   </div>
                                   <div className="form-control">
                                          <label className="label">
                                                 <span className="label-text font-semibold">Password</span>
                                          </label>
                                          <input type="password" placeholder="Password" name="password" className="input input-bordered bg-gray-200 text-sm" required />
                                          <label className="label mt-2">
                                                 <input type="checkbox" className="w-4 h-4" name="checkbox" id="" />
                                                 <p className="ml-2 text-sm">Accept <span className="font-semibold text-gray-700">Term & Conditions</span></p>
                                          </label>
                                   </div>
                                   <div className="form-control ">
                                          <button className="btn bg-black text-white">Register Now</button>
                                   </div>
                                   <p className="text-xs pt-2 text-center">ALready Have An Account ? <Link to='/Login' className="text-red-400 font-bold">Login Now</Link></p>
                            </form>
                     </div>
              </div>
       );
};

export default Register;