import styles from './Introduction.module.css'
import LeftContainer from './leftcontainer/LeftContainer'
import RightContainer from './rightcontainer/RightContainer'

export default function Introduction(): JSX.Element {
    return (
        <div className={styles.container}>
            <LeftContainer />
            <RightContainer />
        </div>
    )
}