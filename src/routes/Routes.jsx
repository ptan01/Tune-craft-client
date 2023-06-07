import { createBrowserRouter } from "react-router-dom";
import Main from "../leyout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login&register/Login";
import Register from "../pages/login&register/Register";
import Dashboard from "../leyout/Dashboard";
import SelectClass from "../dashboardPages/userPages/selectedClasses/SelectClass";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";

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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/selectclass',
                element: <SelectClass></SelectClass>
            }
        ]
    }
])

export default router ;