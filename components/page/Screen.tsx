// Screen.tsx

import clsx from 'clsx'
import { ReactNode } from 'react'

/**
 * Screen
 *
 * @returns
 */
export default function Screen({
    children,
    className,
    overflowHidden
}: {
    children: ReactNode
    className?: string
    overflowHidden?: boolean
}) {
    //

    // ---------------------------------------------------------------------------------------------

    return (
        <div className={clsx('flex', 'h-screen', 'w-screen', 'bg-slate-50', className)}>
            <div
                className={clsx(
                    'flex-1',
                    'flex',
                    'flex-col',
                    overflowHidden ? 'overflow-hidden' : ''
                )}
            >
                {children}
            </div>
        </div>
    )

    //
}

// EOF
