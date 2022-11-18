import styles from './RightContainer.module.css'
import { GrApps } from 'react-icons/gr'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

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
                <div className={styles.slide}>
                    <button className={styles.slide_btn}>
                        <MdOutlineArrowBackIosNew />
                    </button>
                    <div className={styles.content}>
                        <div className={styles.content_element}>
                            <div className={styles.element_links}>
                                A B
                            </div>
                        </div>
                        <div className={styles.content_element}>
                            <div className={styles.element_links}>
                                A B
                            </div>
                        </div>
                        <div className={styles.content_element}>
                            <div className={styles.element_links}>
                                A B
                            </div>
                        </div>
                    </div>
                    <button className={styles.slide_btn}>
                        <MdOutlineArrowForwardIos />
                    </button>
                </div>
            </section>
        </div>
    )
}   