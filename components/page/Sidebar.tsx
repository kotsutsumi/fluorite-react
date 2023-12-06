// Sidebar.tsx

import clsx from 'clsx'
import { ReactNode } from 'react'

/**
 * Sidebar
 *
 * @returns
 */
export default function Sidebar({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ---------------------------------------------------------------------------------------------

    return (
        <nav className={clsx('flex', 'w-72', 'h-full', className)}>
            <div className={clsx('w-full', 'flex', 'mx-auto', 'px-4', 'py-8')}>
                <div className={clsx('w-full', 'h-full', 'flex', 'text-gray-900', 'text-xl')}>
                    {children}
                </div>
            </div>
        </nav>
    )

    //
}

// EOF
