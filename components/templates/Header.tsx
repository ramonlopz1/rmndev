import styles from './Header.module.css'
import Link from 'next/link'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { CiLogin } from "react-icons/ci";
import { useState } from 'react';
import CredentialsContainer from './CredentialsContainer';

export default function Header(): JSX.Element {

    const [show, setShow] = useState<boolean>(true)

    const showComponent = (show: boolean) => {
        setShow(show)
    }

    const loginContainer = (): JSX.Element => {
        return (
            <div
                className={styles.container_login}
                onMouseEnter={() => showComponent(true)}
                onMouseLeave={() => showComponent(false)}
            >
                <CredentialsContainer />
            </div>
        )
    }

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
                    <li className={styles.list_item}
                        onMouseEnter={() => showComponent(true)}
                        onMouseLeave={() => showComponent(false)}
                        style={{
                            backgroundColor: `${show ? 'var(--vsfunc)' : ''}`
                        }}
                    >
                        <CiLogin />

                    </li>
                </ul>
                {show ? loginContainer() : false}
            </nav>

        </header>

    )
}