import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { FaXRay } from 'react-icons/fa'
import styles from './MainIndex.module.css'

interface MainIndexProps {
    setComponentName: Dispatch<SetStateAction<string>>,
    setIndexActive: Dispatch<SetStateAction<number>>,
    indexActive: number
}

export default function MainIndex(props: MainIndexProps): JSX.Element {

    const { setIndexActive, indexActive } = props

    useEffect(() => {
        let count = indexActive
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
        const componentsList: string[] = ['home', 'education', 'end']

        setIndexActive(i)
        props.setComponentName(componentsList[i - 1])
    }

    return (
        <div className={styles.indexes}>
            <div
                className={
                    indexActive === 1 ? styles.index_active : styles.index
                }
                onClick={() => onClickHandler(1)}

            >

            </div>
            <div
                className={
                    indexActive === 2 ? styles.index_active : styles.index
                }
                onClick={() => onClickHandler(2)}
            >

            </div>
            <div
                className={
                    indexActive === 3 ? styles.index_active : styles.index
                }
                onClick={() => onClickHandler(3)}
            >

            </div>
        </div>
    )
}