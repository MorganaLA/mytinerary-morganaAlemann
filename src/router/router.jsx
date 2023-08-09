import { createBrowserRouter } from "react-router-dom";
import Home  from '../pages/Home'
import Main from '../layouts/Main'
import { Cities } from "../pages/Cities";
import Error404 from "../pages/Error404";


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
                path: '*',
                element: <Error404/>
            },
        ]
    }
]);

export default router;