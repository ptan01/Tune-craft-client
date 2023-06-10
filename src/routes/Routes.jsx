import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login&register/Login";
import Register from "../pages/login&register/Register";
import Dashboard from "../leyout/Dashboard";
import SelectClass from "../dashboardPages/userPages/selectedClasses/SelectClass";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import AddClass from "../dashboardPages/instructorPages/addClass/AddClass";
import MyClass from "../dashboardPages/instructorPages/myclass/MyClass";
import PrivetRoute from "./PrivetRoute";
import Payment from "../dashboardPages/payment/Payment";
import PaymentHistory from "../dashboardPages/userPages/paymentHistory/PaymentHistory";
import EnrollClass from "../dashboardPages/userPages/enrollClass/EnrollClass";
import ManageUser from "../dashboardPages/adminPages/manageUser/ManageUser";
import ManageClasses from "../dashboardPages/adminPages/manageClasses/ManageClasses";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/instructor',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            // student routes
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/selectclass',
                element: <SelectClass></SelectClass>
            },
            {
                path: '/dashboard/paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: '/dashboard/enrollclass',
                element: <EnrollClass></EnrollClass>
            },
            // instructor routes
            {
                path: '/dashboard/addclass',
                element: <AddClass></AddClass>
            },
            {
                path: '/dashboard/myclass',
                element: <MyClass></MyClass>,
            },
            // admin routes
            {   
                path: '/dashboard/manageuser',
                element: <ManageUser></ManageUser>
            },
            {
                path: '/dashboard/manageclasses',
                element: <ManageClasses></ManageClasses>
            }
        ]
    }
])

export default router ;