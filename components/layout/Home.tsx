    
import { useState } from 'react'
import Image from 'next/image'

import styles from './Home.module.css'
import img from '../../public/imgs/sunFace.png'
import MainIndex from './MainIndex'
import SocialLinks from './SocialLinks'
import ChangeContent from './ChangeContent'
import Content from './Content'

export default function Home(): JSX.Element {

    const [componentName, setComponentName] = useState("home")
    const [indexActive, setIndexActive] = useState(1)

    return (
        <section className={styles.section}>
            <div className={styles.section_intro}>
                <div className={styles.intro_text}>
                    <h1 className={styles.intro_title}>#letsprogram</h1>
                    <span className={styles.intro_subtitle}>A <span className={styles.text_highlight}>arte</span> de programar consiste na <span className={styles.text_highlight}>arte</span> de organizar a <span className={styles.text_highlight}>complexidade</span>.</span>
                    <div className={styles.author_name}> - Edsger Dijkstra</div>
                </div>
            </div>
            <div className={styles.btn_change_content}>
                {indexActive > 1 ?
                    <ChangeContent
                        btnPosition="top"
                        rotateTop={true}
                        indexActive={indexActive}
                        setIndexActive={setIndexActive}
                        setComponentName={setComponentName}
                    />
                    : false}
            </div>
            <Content componentName={componentName} />
            <div className={styles.btn_change_content}>
                {indexActive < 3 ?
                    <ChangeContent
                        btnPosition="bottom"
                        rotateTop={false}
                        indexActive={indexActive}
                        setIndexActive={setIndexActive}
                        setComponentName={setComponentName}
                    />
                    : false}
            </div>
            <SocialLinks />
            <MainIndex
                setIndexActive={setIndexActive}
                indexActive={indexActive}
                setComponentName={setComponentName}
            />
        </section>
    )
}