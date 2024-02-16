import { Link, NavLink } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../AuthContributor/AuthContributor";
import img from '../../assets/images/logo.png'
import { AiOutlineCaretDown } from "react-icons/ai";


const Navbar = () => {
    const { user, userLogOut } = useContext(AuthProvider);
    const [theme, setTheme] = useState("light")
    const [isTourDropdownOpen, setTourDropdownOpen] = useState(false);

    const handleToggle = () => {
        const html = document.documentElement

        if (theme == 'light') {
            html.classList.remove('light')
            html.classList.add('dark')
            setTheme('dark')
            localStorage.setItem("theme", "dark")

        } else {
            html.classList.remove('dark')
            html.classList.add('light')
            setTheme('light')
            localStorage.setItem("theme", "light")
        }
    }

    const toggleTourDropdown = () => {
        setTourDropdownOpen(!isTourDropdownOpen);
    }


    useEffect(() => {
        const currentMode = localStorage.getItem('theme') || "light"
        setTheme(currentMode)
        const html = document.documentElement
        html.classList.add(currentMode)

    }, [])





    const handleLogOut = () => {
        userLogOut()
            .then(() => console.log("You logged out successfully"))
            .catch(error => console.error(error))
    }

    return (
        <>

            <div className="lg:hidden bg-white">
                <div className="flex">
                    <div className="dropdown flex items-center ">
                        <label tabIndex={0} className="btn btn-ghost dark:text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-56 z-[1] p-2 shadow bg-chocolate  text-center text-lg text-white rounded-box w-32">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to='/manageservice'>Manage Services</NavLink>
                            <NavLink to='/addservices'>Add Services</NavLink>
                            {/* <NavLink to='/myschedules'>My Schedules</NavLink> */}
                            <NavLink to='/mybooking'>My Booking</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <Link onClick={handleToggle}>Change Mode</Link>

                        </ul>
                        <img className="h-24" src={img} alt="" />

                    </div>

                    <div className="flex gap-5 lg:hidden items-center">
                        <div className="flex justify-around items-center gap-2">

                            <div className="">
                                <div className="flex justify-center">
                                    {user ? <img className="h-[24px]  rounded-full" src={user.photoURL} alt="" /> : " "}

                                </div>
                                <p className="text-sm text-black dark:text-white lg:font-bold">
                                    {
                                        user && <span>{user.displayName}</span>
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            {
                                user ? " " : <div className="flex gap-5 mx-3">
                                    <Link to='/login'>  <button className="lg:p-2  rounded-lg text-sm lg:font-bold  bg-[#992833] text-white hover:bg-slate-600">Login</button></Link>
                                    <Link to='/register'> <button className="lg:p-2 rounded-lg text-sm lg:font-bold  bg-[#992833] hover:bg-slate-600 text-white">Register</button></Link>
                                </div>
                            }

                            {
                                user ? <button onClick={handleLogOut} className="lg:p-2 p-1 rounded-lg text-sm  bg-[#992833] lg:font-bold  hover:bg-slate-600 text-white">SignOut</button> : " "
                            }
                        </div>
                    </div>
                </div>
            </div>



            <div className=" dark:bg-gray-800 bg-white w-full lg:flex justify-around hidden px-40 items-center ">


                <div className="flex">
                    <div>
                        <img className="lg:h-36" src={img} alt="" />
                    </div>

                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onClick={handleToggle}
                        />

                        {/* sun icon */}
                        <svg className="dark:text-white swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="dark:text-white swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>

                <div className="flex">
                    < nav className="flex items-center">
                        <ul className="flex mr-10 space-x-3 lg:text-3xl font-semibold lg:text-black dark:text-white ont-medium">

                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            {user &&
                                (
                                    <li
                                        onMouseEnter={() => setTourDropdownOpen(true)}
                                        onMouseLeave={() => setTourDropdownOpen(false)}
                                    >
                                        <div>
                                            <Link to='/dashboard'>  <span onClick={toggleTourDropdown} className="flex items-center">Dashboard <AiOutlineCaretDown></AiOutlineCaretDown> </span></Link>
                                            {isTourDropdownOpen && (
                                                <ul className="absolute top-[90px] bg-[#992833] text-center text-lg text-white rounded-lg w-[150px]">
                                                    <li>
                                                        <Link to='/manageservice'>Manage Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/addservices'>Add Services</Link>
                                                    </li>
                                                    {/* <li>
                                                        <Link to='/myschedules'>My Schedules</Link>
                                                    </li> */}
                                                    <li>
                                                        <Link to='/mybooking'>My Booking</Link>
                                                    </li>

                                                </ul>
                                            )}
                                        </div>
                                    </li>
                                )}


                            <li>
                                <Link to='/services'>Services</Link>
                            </li>

                        </ul>

                    </nav>
                </div>


                <div className="flex items-center">
                    <div className="flex items-center gap-3">

                        <div>
                            {user ? <img className="h-[50px] rounded-full" src={user.photoURL} alt="" /> : " "}
                        </div>
                        <p className="text-xl dark:text-white  lg:font-bold">
                            {
                                user && <span>{user.displayName}</span>
                            }
                        </p>
                    </div>
                    <div className="flex">
                        {
                            user ? " " : <div>
                                <Link to='/login'>  <button className="btn  text-sm font-bold bg-[#992833] dark:bg-gray-800 text-white hover:bg-slate-600">Login</button></Link>
                                <Link to='/register'> <button className="btn text-sm font-bold bg-[#992833] dark:bg-gray-800 hover:bg-slate-600 text-white">Register</button></Link>
                            </div>
                        }

                        {
                            user ? <button onClick={handleLogOut} className="btn text-sm font-bold bg-[#992833] dark:bg-gray-800 hover:bg-slate-600 text-white">SignOut</button> : " "
                        }
                    </div>
                </div>


            </div>


        </>
    );
};

export default Navbar;