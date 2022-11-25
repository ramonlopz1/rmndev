import styles from './LeftContainer.module.css'
import Image from 'next/image'
import img from '../../../../public/imgs/profile/me.jpg'
export default function LeftContainer(): JSX.Element {
    return (
        <div className={styles.left_container}>
            <div className={styles.picture}>
                <Image src={img} alt="Profile Pic" height={220} width={220}/>
            </div>
            <div className={styles.infos}>
                <h4 className={styles.myname}>Ramon Lopes</h4>
                <span>Intern @ Oracle Corporation</span>
                <span>Web Developer @ NSH Technologies</span>
            </div>
        </div>
    )
}