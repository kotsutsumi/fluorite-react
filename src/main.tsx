// main.tsx

import './index.scss'

import { PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
)

// EOF
