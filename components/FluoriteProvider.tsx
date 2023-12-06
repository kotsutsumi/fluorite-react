// FluoriteProvider.tsx

import { PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'
import { ReactNode } from 'react'

/**
 * FluoriteProvider
 *
 * @returns
 */
export default function FluoriteProvider({ children }: { children: ReactNode }) {
    //

    // ---------------------------------------------------------------------------------------------

    return (
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>{children}</PrimeReactProvider>
    )

    //
}

// EOF
