import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Main from '../layouts/Main'
import { Cities } from "../pages/Cities";


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
                element: <h1 className="text-3xl">Pagina de ERROR</h1>
            },
        ]
    }
]);

export default router;