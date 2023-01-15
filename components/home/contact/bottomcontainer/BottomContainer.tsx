import Link from 'next/link'
import { FcIphone } from 'react-icons/fc'
import styles from './BottomContainer.module.css'

export default function BottomContainer(): JSX.Element {
    return (
        <div className={styles.bottom_container}>
            <div className={styles.sub_container}>
                <h3 className={styles.title}>Contato</h3>
                <div className={styles.contact_info}>
                    <div className={styles.phones}>
                        <div className={styles.phone}>
                            <h4 className={styles.subtitle}>Telefones</h4>
                            <div className={styles.phone_box}>
                                <FcIphone />
                                <a className={styles.phone_btn}>
                                    <Link href="tel:+87991309869">(87) 9 9130-9869</Link>
                                </a>
                            </div>
                            <hr style={{ width: '30%', margin: '0px' }}/>
                            <div className={styles.phone_box}>
                                <FcIphone />
                                <a className={styles.phone_btn}>
                                    <Link href="tel:+87999090918">(87) 9 9909-0918</Link>
                                </a>
                            </div>
                        </div>
                        <div className={styles.phone}>
                            <h4 className={styles.subtitle}>E-mails</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sub_container}>
                <h3 className={styles.title}>Redes</h3>
                <div className={styles.web_info}>

                </div>
            </div>
        </div>
    )
}