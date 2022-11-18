
import { useState } from 'react'
import Image from 'next/image'

import styles from './Main.module.css'
import img from '../../public/imgs/sunFace.png'
import MainIndex from './MainIndex'
import SocialLinks from './SocialLinks'
import Content from './Content'

export default function Main(): JSX.Element {

    const [componentName, setComponentName] = useState("home")

    return (
        <section className={styles.section}>
            <div className={styles.section_intro}>
                <div className={styles.intro_text}>
                    <h1 className={styles.intro_title}>#letsprogram</h1>
                    <span className={styles.intro_subtitle}>A <span className={styles.border_bottom}>arte</span> de programar consiste na <span className={styles.border_bottom}>arte</span> de organizar a <span className={styles.border_bottom}>complexidade</span>.</span>
                    <div className={styles.author_name}> - Edsger Dijkstra</div>
                </div>
            </div>
            <Content componentName={componentName} />
            <SocialLinks />
            <MainIndex setComponentName={setComponentName}/>
        </section>
    )
}