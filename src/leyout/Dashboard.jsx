import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Fade,Flip,Hinge ,Slide} from "react-awesome-reveal";

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
                        <Slide>
                        <li><Link to='/dashboard/addclass'>Add a class</Link></li>
                        </Slide>
                        <Slide>
                        <li><Link to='/dashboard/myclass'>My Classes</Link></li>
                        </Slide>
                        <Slide>
                        <li><Link to='/'>Home</Link></li>
                        </Slide>
                        </> 

                    }
                    {
                         admin &&  <>
                         <Slide>
                         <li><Link to='/dashboard/selectclass'>Manage Classes</Link></li>
                         </Slide>
                         <Slide>
                         <li><Link to='/'>Home</Link></li>
                         </Slide>
                         <Slide>
                         <li><a>Sidebar Item 2</a></li>
                         </Slide>
                         </>
                    }
                    {
                        !instructor && !admin && <>
                        <Slide>
                        <li><Link to='/dashboard/selectclass'>Selected Classes</Link></li>
                        </Slide>
                        <Slide>
                        <li><Link to='/'>Home</Link></li>
                        </Slide>
                        <Slide>
                        <li><a>Sidebar Item 2</a></li>
                        </Slide>
                        </>
                    }
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;