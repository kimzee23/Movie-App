import {createBrowserRouter} from "react-router";

const router =  createBrowserRouter([

    {
        path : "/login",
        element:" <Login/>"
    },
    {
     path : "/signup",
     element:" <Signup/>"
    }

])
export default router;