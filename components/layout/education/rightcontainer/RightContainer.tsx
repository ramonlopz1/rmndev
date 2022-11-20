import Image from 'next/image'
import { TbRotate360 } from 'react-icons/tb'
import { FcCalendar } from 'react-icons/fc'
import styles from './RightContainer.module.css'
import certificationList from './certificationList'
import { useState } from 'react'

export default function RightContainer(): JSX.Element {

    const [turnCard, setTurnCard] = useState(false)

    const renderBoxFront = (img) => {
        return (
            <div className={styles.box_front}>
                <div className={styles.box_img}>
                    <Image
                        src={img} alt='box image' width={100}
                    />
                </div>
                <div className={styles.box_btn}>
                    <button
                        onClick={() => setTurnCard(true)}
                        className={styles.btn}
                    >
                        <TbRotate360 />
                    </button>
                </div>
            </div>
        )
    }

    const renderBoxBack = (course: string, conclusion: string) => {
        return (
            <div className={styles.box_back}>
                <div className={styles.course}>
                    {course}
                </div>
                <div className={styles.conclusion}>
                    {conclusion}
                </div>
                <div className={styles.box_btn}>
                    <button
                        onClick={() => setTurnCard(false)}
                        className={styles.btn}
                    >
                        <TbRotate360 />
                    </button>
                </div>
            </div>
        )
    }

    const renderBoxes = () => {
        return certificationList.map((box, i) => {
            return (
                <div className={styles.box} key={i}>
                    {
                        turnCard ? renderBoxBack(box.course, box.conclusion)
                            : renderBoxFront(box.img)
                    }
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            {renderBoxes()}
        </div>
    )
}