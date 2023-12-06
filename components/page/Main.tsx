// Main.tsx

import clsx from 'clsx'
import { ReactNode } from 'react'

/**
 * Main
 *
 * @returns
 */
export default function Main({ children, className }: { children: ReactNode; className?: string }) {
    //

    // ---------------------------------------------------------------------------------------------

    return (
        <main
            className={clsx(
                'flex',
                'flex-col',
                'w-full',
                'overflow-x-hidden',
                'overflow-y-auto',
                'mb-14',
                className
            )}
        >
            <div className={clsx('flex', 'w-full', 'mx-auto', 'px-4', 'py-8')}>
                <div
                    className={clsx(
                        'flex',
                        'flex-col',
                        'w-full',
                        'h-full',
                        'text-gray-900',
                        'text-xl'
                    )}
                >
                    {children}
                </div>
            </div>
        </main>
    )

    //
}

// EOF
