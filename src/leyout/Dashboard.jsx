import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Fade, Flip, Hinge, Slide } from "react-awesome-reveal";
import useSelectClass from '../hooks/useSelectClass';

const Dashboard = () => {

    const [selectedclass] = useSelectClass()

    const instructor = false;

    const admin = true;

    // flex flex-col items-center justify-center

    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content   ">
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

                        </>

                    }
                    {
                        admin && <>
                            <Slide>
                                <li><Link to='/dashboard/manageclasses'>Manage Classes</Link></li>
                            </Slide>

                            <Slide>
                                <li><Link to='/dashboard/manageuser'>Manage Users</Link></li>
                            </Slide>
                        </>
                    }
                    {
                        !instructor && !admin && <>
                            <Slide>
                                <li><Link to='/dashboard/selectclass'>Selected Classes <div className="badge badge-secondary badge-outline">{selectedclass.length}</div></Link></li>
                            </Slide>
                            <Slide>
                                <li><Link to='/dashboard/paymenthistory'>Payment History</Link></li>
                            </Slide>
                            <Slide>
                                <li><Link to='/dashboard/enrollclass'>Enroll Class</Link></li>
                            </Slide>
                        </>
                    }
                    <Slide>
                        <li><Link to='/'>Home</Link></li>
                    </Slide>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;