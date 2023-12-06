// SplitButton.tsx

import styles from './SplitButton.module.scss'
import PageBase from '../PageBase'
import FluoriteSplitButton from '../../components/button/SplitButton'
import MenuItem from '../../components/types/MenuItem'

/**
 * SplitButton
 *
 * @returns
 */
export default function SplitButton() {
    //

    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                // toast.current.show({
                //     severity: 'success',
                //     summary: 'Updated',
                //     detail: 'Data Updated'
                // })
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                // toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' })
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ]

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' })
    }

    // ---------------------------------------------------------------------------------------------

    return (
        <PageBase className={styles.wrap}>
            <FluoriteSplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
        </PageBase>
    )

    //
}

// EOF
