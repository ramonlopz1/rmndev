import BottomContainer from './bottomcontainer/BottomContainer'
import styles from './Contact.module.css'
import TopContainer from './topcontainer/TopContainer'

export default function Contact(): JSX.Element {
    return (
        <div className={styles.container}>
          <TopContainer />
          <BottomContainer />
        </div>
    )
}