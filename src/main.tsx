// main.tsx

import 'modern-css-reset'
import './index.scss'

import { PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './ErrorPage'
import Home from './Home.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <div className="flex h-screen bg-green-300">
                <RouterProvider router={router} />
            </div>
        </PrimeReactProvider>
    </React.StrictMode>
)

// EOF
