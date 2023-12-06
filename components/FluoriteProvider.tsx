// FluoriteProvider.tsx

import { PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'
import { ReactNode } from 'react'

/**
 * FluoriteProvider
 *
 * @returns
 */
export default function FluoriteProvider({
    children,
    unstyled,
    pt
}: {
    children: ReactNode
    unstyled?: boolean
    pt?: any
}) {
    //

    // ---------------------------------------------------------------------------------------------

    return (
        <PrimeReactProvider
            value={{ unstyled: unstyled ? unstyled : true, pt: pt ? pt : Tailwind }}
        >
            {children}
        </PrimeReactProvider>
    )

    //
}

// EOF
