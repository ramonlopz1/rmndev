import styles from './Footer.module.css'
import Link from "next/link"

export default function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <Link href='./'>
                Developed by <span className={styles.span}>Ramon Lopes</span> © 2022 - All rights reserved.
            </Link>
        </footer>
    )
}