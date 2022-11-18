import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { FaXRay } from 'react-icons/fa'
import styles from './MainIndex.module.css'

interface MainIndexProps {
    setComponentName: Dispatch<SetStateAction<string>>
}

export default function MainIndex(props: MainIndexProps): JSX.Element {

    const [indexAcvite, setIndexActive] = useState(1)

    useEffect(() => {
        let count = indexAcvite
        if (window) {
            window.addEventListener('wheel', e => {
                if (count >= 1 && count < 3 && e.deltaY > 0) {
                    count += 1
                    setIndexActive(count)
                    onClickHandler(count)
                } else if (count > 1 && e.deltaY <= 0) {
                    count -= 1
                    setIndexActive(count)
                    onClickHandler(count)
                }
            })
        }
    }, [])

    const onClickHandler = (i: number) => {
        const componentsList: string[] = ['home', 'exp', 'end']

        setIndexActive(i)
        props.setComponentName(componentsList[i - 1])
    }

    return (
        <div className={styles.indexes}>
            <div
                className={
                    indexAcvite === 1 ? styles.index_active : styles.index
                }
                onClick={() => onClickHandler(1)}

            >

            </div>
            <div
                className={
                    indexAcvite === 2 ? styles.index_active : styles.index
                }
                onClick={() => onClickHandler(2)}
            >

            </div>
            <div
                className={
                    indexAcvite === 3 ? styles.index_active : styles.index
                }
                onClick={() => onClickHandler(3)}
            >

            </div>
        </div>
    )
}