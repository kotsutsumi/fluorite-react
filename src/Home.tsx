// Home.tsx

import styles from './Home.module.scss'
import Button from '../components/button/Button'
import PageBase from './PageBase'

function App() {
    //

    // ---------------------------------------------------------------------------------------------

    return (
        <PageBase className={styles.wrap}>
            <div>
                <Button label="Click" />
            </div>
        </PageBase>
    )

    //
}

export default App

// EOF
