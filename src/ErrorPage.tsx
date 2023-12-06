// ErrorPage.tsx

import { useRouteError } from 'react-router-dom'
import styles from './ErrorPage.module.scss'

/**
 * ErrorPage
 *
 * @returns
 */
export default function ErrorPage() {
    //

    const error = useRouteError()

    console.error(error)

    // ---------------------------------------------------------------------------------------------

    return (
        <div className={styles.wrap}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{(error as any).statusText || (error as any).message}</i>
            </p>
        </div>
    )

    //
}

// EOF
