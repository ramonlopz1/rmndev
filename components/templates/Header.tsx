import styles from './Header.module.css'
import Link from 'next/link'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <code className={styles.title}>{'<ramon dev={web}/>'}</code>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <Link href='https://github.com/ramonlopz1' target='_blank' rel='My Github profile'>
                            <FaGithubAlt />
                        </Link>
                    </li>
                    <li className={styles.list_item}>
                        <Link href='https://linkedin.com/in/ramonlopz1' target='_blank' rel='My LinkedIn profile'>
                            <FaLinkedinIn />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}