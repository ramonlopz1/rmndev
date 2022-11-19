import Slide from './Slide'
import styles from './RightContainer.module.css'
import { GrApps } from 'react-icons/gr'


export default function RightContainer(): JSX.Element {
    return (
        <div className={styles.right_container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Portfólio</h2>
                <GrApps />
            </div>
            <section className={styles.section}>
                <div className={styles.filter}>
                    <button className={styles.filter_btn}>Todos</button>
                    <button className={styles.filter_btn}>Recentes</button>
                    <button className={styles.filter_btn}>Antigos</button>
                </div>
               <Slide/>
            </section>
        </div>
    )
}   