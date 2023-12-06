// Header.tsx

import clsx from 'clsx'
import { ReactNode } from 'react'

/**
 * Header
 *
 * @returns
 */
export default function Header({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ---------------------------------------------------------------------------------------------

    return (
        <header className={clsx('flex', 'justify-between', 'items-center', 'p-4', className)}>
            {children}
        </header>
    )

    //
}

// EOF
