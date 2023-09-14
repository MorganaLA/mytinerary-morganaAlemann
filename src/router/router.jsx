import { createBrowserRouter } from "react-router-dom";
import Home  from '../pages/Home'
import Main from '../layouts/Main'
import Cities from "../pages/Cities";
import Error404 from "../pages/Error404";
import Details from "../pages/Details";
import Log from '../pages/Log';
import ProtectedRoute from "./ProtectedRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />
            },
            {
                path: '/cities/:id',
                element: <Details />
            },  
            {
                path: '/log',
                element: (<ProtectedRoute path='/'>
                <Log />
                </ProtectedRoute>)
            },            
            {
                path: '*',
                element: <Error404/>
            },
        ]
    }
]);

export default router;