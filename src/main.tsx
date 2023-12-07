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

import ButtonExample from './examples/button/Button.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: '/button/button',
        element: <Button />
    },

    {
        path: '/button/speed-dial',
        element: <SpeedDial />
    },
    {
        path: '/button/split-button',
        element: <SplitButton />
    },
    {
        path: '/examples/button/button',
        element: <ButtonExample />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// EOF
