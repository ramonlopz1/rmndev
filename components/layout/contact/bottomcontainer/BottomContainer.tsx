import styles from './BottomContainer.module.css'

export default function BottomContainer(): JSX.Element {
    return (
        <div className={styles.bottom_container}>
            <div className={styles.sub_container}>
                <h3>Contato</h3>
                <div className={styles.contact_info}>

                </div>
            </div>
            <div className={styles.sub_container}>
                <h3>Redes</h3>
                <div className={styles.web_info}>
                    
                </div>
            </div>
        </div>
    )
}