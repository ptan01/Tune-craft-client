import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    const {user} = useContext(AuthContext)


    const navitem = <>
        <li><Link to='/'>Home</Link></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow z-10 bg-base-100 rounded-box w-52">
                        {navitem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl">Tune <span className='text-red-600'>Craft</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitem}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <a className="btn">Button</a> : <Link className='btn' to='/login'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;