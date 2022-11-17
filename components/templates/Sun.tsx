import styles from './Sun.module.css'

interface SunProps {
    children?: any
}

export default function Sun(props: SunProps): JSX.Element {
    return (
        <div className={styles.div_sun}>
            {props.children}
        </div>
    )
}