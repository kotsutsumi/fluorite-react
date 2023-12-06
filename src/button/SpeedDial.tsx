// SpeedDial.tsx

import styles from './SpeedDial.module.scss'
import PageBase from '../PageBase'
import FluoriteSpeedDial from '../../components/button/SpeedDial'

import { MenuItem } from 'primereact/menuitem'

/**
 * SpeedDial
 *
 * @returns
 */
export default function SpeedDial() {
    //

    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                // toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' })
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                // toast.current.show({
                //     severity: 'success',
                //     summary: 'Update',
                //     detail: 'Data Updated'
                // })
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                // toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' })
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ]

    // ---------------------------------------------------------------------------------------------

    return (
        <PageBase className={styles.wrap}>
            <div>
                <FluoriteSpeedDial
                    model={items}
                    direction="up"
                    style={{ left: 'calc(50% - 2rem)', bottom: 0 }}
                />
            </div>
        </PageBase>
    )

    //
}

// EOF
