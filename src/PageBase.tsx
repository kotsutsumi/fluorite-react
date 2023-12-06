// PageBase.tsx

import clsx from 'clsx'
import { ReactNode } from 'react'

import 'primeicons/primeicons.css'

import FluoriteProvider from '../components/FluoriteProvider'
import Header from '../components/page/Header'
import Main from '../components/page/Main'
import Screen from '../components/page/Screen'
import Sidebar from '../components/page/Sidebar'

/**
 * PageBase
 *
 * @returns
 */
export default function PageBase({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) {
    //

    // ---------------------------------------------------------------------------------------------

    return (
        <FluoriteProvider>
            <Screen className={clsx(className)}>
                {/* Header */}
                <Header>
                    {/* Left */}
                    <div className={clsx('flex')}>
                        <h1 className={clsx('text-4xl', 'text-cyan-950')}>Fluorite React</h1>
                    </div>
                    {/* Right */}
                    <div className={clsx('flex')}></div>
                </Header>

                <div className={clsx('flex', 'h-full')}>
                    {/* Sidebar */}
                    <Sidebar>
                        <ul>
                            <li>Buttons</li>
                        </ul>
                    </Sidebar>

                    {/* Main */}
                    <Main>{children}</Main>
                </div>
            </Screen>
        </FluoriteProvider>
    )

    //
}

// EOF
