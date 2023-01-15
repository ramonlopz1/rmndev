import styles from './ChangeContent.module.css'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Dispatch, SetStateAction } from 'react'
interface ChangeContentProps {
    rotateTop: boolean,
    setIndexActive: Dispatch<SetStateAction<number>>,
    setComponentName: Dispatch<SetStateAction<string>>,
    indexActive: number,
    btnPosition: string
}

export default function ChangeContent(props: ChangeContentProps): JSX.Element {

    const rotate = props.rotateTop
        ? { transform: 'rotate(90deg)' }
        : { transform: 'rotate(270deg)' }

    // se o index for >= 1 && < 3...

    const onClickHandler = (): void => {
        let count: number = props.indexActive
        const componentsList: string[] = ['home', 'education', 'end']

        if (props.btnPosition === 'top' && props.indexActive > 1) {
            count--
            props.setIndexActive(count)
            props.setComponentName(componentsList[count - 1])
        } else if (props.btnPosition === 'bottom' && props.indexActive < 3) {
            count++
            props.setIndexActive(count)
            props.setComponentName(componentsList[count - 1])
        }
    }

    return (
        <div className={styles.container}>
            <div
                style={{ ...rotate }}
                className={styles.icon_wrapper}
                onClick={() => onClickHandler()}
            >
                <MdOutlineArrowBackIosNew />
            </div>
        </div>
    )
}