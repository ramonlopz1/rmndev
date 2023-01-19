import styles from './Content.module.css'
import UploadProject from './UploadProject'

export default function Content(): JSX.Element {

    return (
        <main className={styles.content}>
            <div className={styles.main_box}>
                <h2 className={styles.title}>Painel</h2>
                <div className={styles.forms}>
                    <UploadProject />
                </div>
            </div>


        </main>
    )
}