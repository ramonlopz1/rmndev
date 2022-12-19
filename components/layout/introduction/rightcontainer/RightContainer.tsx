import { useState } from 'react'
import Slide from './Slide'
import styles from './RightContainer.module.css'
import { GrApps } from 'react-icons/gr'


export default function RightContainer(): JSX.Element {

    const [filter, setFilter] = useState("all")
    const [projectType, setProjectType] = useState("web")

    const buttonStyle = (idx: number) => {
        if(projectType === 'web' && idx === 1) {
            return {
                backgroundColor: "var(--purple0)"
            }
        } else if(projectType === 'designer' && idx === 2) {
            return {
                backgroundColor: "var(--purple0)"
            }
        }
    }

    return (
        <div className={styles.right_container}>
            <div className={styles.header}>
                <button
                    className={styles.projecttype_btn}
                    onClick={() => setProjectType("web")}
                    style={
                        buttonStyle(1)
                    }
                >Web</button>
                <button
                    className={styles.projecttype_btn}
                    onClick={() => setProjectType("designer")}
                    style={
                        buttonStyle(2)
                    }
                >Designer</button>
                {/* <GrApps /> */}
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
                <Slide filter={filter} type={projectType} />
            </section>
        </div>
    )
}   