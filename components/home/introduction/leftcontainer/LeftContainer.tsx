import styles from './LeftContainer.module.css'
import Image from 'next/image'
import { BsWhatsapp } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import img from '../../../../public/imgs/profile/me.jpg'

export default function LeftContainer(): JSX.Element {
    return (
        <div className={styles.left_container}>
            <div className={styles.ticket}>
                <div className={styles.picture}>
                    <Image src={img} alt="Profile Pic" height={130} width={130} />
                </div>
                <div className={styles.card}>
                    <div className={styles.card_infos}>
                        <h4 className={styles.myname}>Ramon Lopes</h4>
                        <hr className={styles.hr} />
                        <span className={styles.profission}>Software Developer</span>

                    </div>
                    <div className={styles.card_icons}>
                        <BsWhatsapp />
                        <FaTelegramPlane />
                    </div>
                </div>
            </div>
            <div className={styles.jobs}>
                <div className={styles.jobs_description}>
                    <h3 style={{ color: 'white' }}>Últimos trabalhos</h3>
                    <code>
                       <span style={{color: 'yellow'}}>(</span>
                       <span style={{color: '#0da10d'}}>Oracle Corporation</span>
                       <span style={{color: 'yellow'}}>)</span>
                       <span style={{color: 'lightblue'}}> {'=>'} </span>
                       <span style={{color: 'purple'}}>{'{'}</span>
                       <span style={{color: '#008cff'}}> Intern </span>
                       <span style={{color: 'purple'}}>{'}'}</span>
                    </code>
                    <hr />
                    <code>
                    <span style={{color: 'yellow'}}>(</span>
                       <span style={{color: '#0da10d'}}>NSH Technologies</span>
                       <span style={{color: 'yellow'}}>)</span>
                       <span style={{color: 'lightblue'}}> {'=>'} </span>
                       <span style={{color: 'purple'}}>{'{'}</span>
                       <span style={{color: '#008cff'}}> Full Stack Developer </span>
                       <span style={{color: 'purple'}}>{'}'}</span>
                    </code>
                    <hr />
                    <code>
                    <span style={{color: 'yellow'}}>(</span>
                       <span style={{color: '#0da10d'}}>Bayta Atacarejo</span>
                       <span style={{color: 'yellow'}}>)</span>
                       <span style={{color: 'lightblue'}}> {'=>'} </span>
                       <span style={{color: 'purple'}}>{'{'}</span>
                       <span style={{color: '#008cff'}}> Analyst & Developer </span>
                       <span style={{color: 'purple'}}>{'}'}</span>
                    </code>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,64L60,96C120,128,240,192,360,197.3C480,203,600,149,720,154.7C840,160,960,224,1080,229.3C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}


