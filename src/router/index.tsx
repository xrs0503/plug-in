import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../components/AuthRoute";
import Home from "../pages/Home";
import LayoutView from "../pages/Layout";
import Login from "../pages/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<AuthRoute><LayoutView/></AuthRoute>,
        children:[
            {
                path:'home',
                element:<Home/>
            }
        ]
    },{
        path:"/login",
        element:<Login/>
    }
])

export default router