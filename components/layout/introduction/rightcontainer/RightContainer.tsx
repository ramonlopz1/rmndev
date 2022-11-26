import { useState } from 'react'
import Slide from './Slide'
import styles from './RightContainer.module.css'
import { GrApps } from 'react-icons/gr'


export default function RightContainer(): JSX.Element {

    const [filter, setFilter] = useState("all")

    return (
        <div className={styles.right_container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Portfólio</h2>
                <GrApps />
            </div>
            <section className={styles.section}>
                <div className={styles.filter}>
                    <button
                        className={styles.filter_btn}
                        onClick={() => setFilter("all")}
                    >Todos</button>
                    <button 
                    className={styles.filter_btn}
                    onClick={() => setFilter("new")}
                    >Recentes</button>
                    <button 
                    className={styles.filter_btn}
                    onClick={() => setFilter("old")}
                    >Antigos</button>
                </div>
                <Slide filter={filter} />
            </section>
        </div>
    )
}   