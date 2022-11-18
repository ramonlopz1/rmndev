import styles from './LeftContainer.module.css'
import Image from 'next/image'
export default function LeftContainer(): JSX.Element {
    return (
        <div className={styles.left_container}>
            <div className={styles.picture}>
                <Image src="" alt="Profile Pic" />
            </div>
            <div className={styles.infos}>
                <h4>Ramon Lopes</h4>
            </div>
        </div>
    )
}