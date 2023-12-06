// main.tsx

import 'modern-css-reset'
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './ErrorPage'
import Home from './Home.tsx'
import Button from './button/Button.tsx'
import SpeedDial from './button/SpeedDial.tsx'
import SplitButton from './button/SplitButton.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/button',
        element: <Button />
    },
    {
        path: '/speed-dial',
        element: <SpeedDial />
    },
    {
        path: '/split-button',
        element: <SplitButton />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// EOF
