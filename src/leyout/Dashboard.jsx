import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {


    const instructor = false ;

    const admin = false ;

    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        instructor && <>
                        <li><Link to='/dashboard/addclass'>Add a class</Link></li>
                        <li><Link to='/dashboard/myclass'>My Classes</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        </> 

                    }
                    {
                         admin &&  <>
                         <li><Link to='/dashboard/selectclass'>Manage Classes</Link></li>
                         <li><Link to='/'>Home</Link></li>
                         <li><a>Sidebar Item 2</a></li>
                         </>
                    }
                    {
                        !instructor && !admin && <>
                        <li><Link to='/dashboard/selectclass'>Selected Classes</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;