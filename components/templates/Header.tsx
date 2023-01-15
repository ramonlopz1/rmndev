import styles from './Header.module.css'
import Link from 'next/link'
import { signOut } from 'next-auth/react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { CiLogin, CiLogout } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";

import { useState } from 'react';
import CredentialsContainer from './CredentialsContainer';
import { useSession } from 'next-auth/react';

export default function Header(): JSX.Element {

    const [show, setShow] = useState<boolean>(false)
    const { data, status } = useSession()

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
                {status === 'authenticated' ? (
                    <Link href="/" className={styles.home_icon}>
                        <AiOutlineHome style={{ fontSize: '23px' }} />
                    </Link>
                ) : false

                }
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
                            backgroundColor: `${show ? 'var(--purple0)' : ''}`
                        }}
                    >
                        {status === 'authenticated' ? <CiLogout onClick={() => signOut()} /> : <CiLogin />}

                    </li>
                </ul>
            </nav>
            {show && status === 'unauthenticated' ? loginContainer() : false}

        </header>

    )
}