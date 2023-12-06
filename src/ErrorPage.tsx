// ErrorPage.tsx

import { useRouteError } from 'react-router-dom'

/**
 * ErrorPage
 *
 * @returns
 */
export default function ErrorPage() {
    //

    const error = useRouteError()
    console.error(error)

    // ------------------------------------------------------------------------

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )

    //
}

// EOF
