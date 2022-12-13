import styles from './Loading.module.css'

export default function Loading(): JSX.Element {
    return (
        <div className={styles.loadercontainer}>
            <div className={styles.div1}>
                <div className={styles.div2}>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
        </div>
    )
}