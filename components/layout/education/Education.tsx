import LeftContainer from './leftcontainer/LeftContainer'
import styles from './Education.module.css'
import RightContainer from './rightcontainer/RightContainer'

export default function Education(): JSX.Element {
    return (
        <div className={styles.container}>
           <LeftContainer/>
           <RightContainer />
        </div>
    )
}