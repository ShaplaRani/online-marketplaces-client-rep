import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import logo from '../../assets/logo2.png'
import swal from "sweetalert";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    
    const handleSignOut = () => {
        logout()
            .then(result => {

                swal('Sign Out Successful')
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
                //  swal(error.message)
            })
    }

    const navLinks = <>

    <NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >
        <li className="text-lg md:text-xl font-semibold">Home</li>
    </NavLink>

    {/* <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >
        <li className="text-lg md:text-xl font-semibold">Register</li>

    </NavLink> */}
    <NavLink
        to="/addJob"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >
        <li className="text-lg md:text-xl font-semibold"> Add Job</li>

    </NavLink>
    <NavLink
        to="/postedJob"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >
        <li className="text-lg md:text-xl font-semibold"> My Posted Jobs</li>

    </NavLink>
    <NavLink
        to="/bids"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >   <li className="text-lg md:text-xl font-semibold"> My Bids</li>

    </NavLink>
    <NavLink
        to="/bidRequest"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-emerald-400 underline" : ""
        }
    >   <li className="text-lg md:text-xl font-semibold"> Bid Request</li>

    </NavLink>

</>

    return (
        <div className="container mx-auto pr-2">
             <div className="navbar bg-base-100 mt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
        
      </ul>
    </div>
     <div className="flex gap-0 items-center">
      <img className="w-20 h-20  " src={logo} alt="" />
       <a className=" hidden md:block  font-bold text-2xl ">Bit Jobs</a>
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-3 md:gap-5 justify-center mt-1 mb-2">
        {
            navLinks
        }
     
    </ul>
  </div>
  <div className="navbar-end">
    {/* <NavLink to ="/login">login</NavLink> */}
          {
                    user ? <div className="flex items-center ">
                        
                       
                         <div className=" navbar-center hidden md:flex">
                         <img className="w-7 h-7 rounded-full mr-3" src={user.photoURL} alt="" />
                         <p className="text-lg font-medium mr-3">{user.displayName}</p>
                         </div>
                     
                        <button onClick={handleSignOut} className="btn bg-blue-700 text-base
                         text-white">Sign Out</button>
                        
                    </div> :
                        <Link to="/login"> <button 
                        className="btn bg-blue-700 text-base text-white">Login</button></Link>
                }
            </div>
   
            </div>
            <div className="md:hidden">
                     {
                        user && <div className=" flex justify-end">
                        <img className="w-7 h-7 rounded-full mr-3" src={user.photoURL} alt="" />
                        <p className="text-lg font-medium mr-3">{user.displayName}</p>
                        </div>
                     }
            </div>
        </div>
    );
};

export default Navbar;