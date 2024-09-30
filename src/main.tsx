import ReactDOM from 'react-dom/client';
import '@/styles/globals.css';
import router from "@/route-tree.ts";
import {RouterProvider} from "@tanstack/react-router";

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RouterProvider router={router} />)
