import ReactDOM from 'react-dom/client';
import '@/styles/globals.css';
import App from "@/App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "@/routes/routes.tsx";

const router = createBrowserRouter([
    {
        path: '*',
        element: <App />,
        children: routes.map(route => ({
            index: route.path === '/',
            path: route.path === '/' ? undefined : route.path,
            element: route.element,
        })),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RouterProvider router={router} />);
