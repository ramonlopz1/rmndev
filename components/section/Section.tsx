
import { useState } from 'react'
import Image from 'next/image'

import styles from './Section.module.css'
import img from '../../public/imgs/sunFace.png'
import SectionIndex from './SectionIndex'
import SocialLinks from './SocialLinks'
import Informations from './Informations'

export default function Section(): JSX.Element {

    const [componentName, setComponentName] = useState("home")

    return (
        <section className={styles.section}>
            <div className={styles.section_intro}>
                <div className={styles.intro_text}>
                    <h1 className={styles.intro_title}>Ramon Lopes</h1>
                    <span className={styles.intro_subtitle}>Web Developer</span>
                </div>
            </div>
            <Informations componentName={componentName} />
            <SocialLinks />
            <SectionIndex setComponentName={setComponentName}/>
        </section>
    )
}