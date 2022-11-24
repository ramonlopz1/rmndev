import styles from './ChangeContent.module.css'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Dispatch, SetStateAction } from 'react'
interface ChangeContentProps {
    rotateTop: boolean,
    setIndexActive: Dispatch<SetStateAction<number>>,
    indexActive: number
}

export default function ChangeContent(props: ChangeContentProps): JSX.Element {

    const rotate = props.rotateTop ? { transform: 'rotate(90deg)' }
        : { transform: 'rotate(270deg)' }

    // se o index for >= 1 && < 3...

    const onClickHandler = () => {
       
    }

    return (
        <div className={styles.container}>
            <div
                style={{
                    ...rotate
                }}
                className={styles.icon_wrapper}
                onClick={() => onClickHandler()}
            >
                <MdOutlineArrowBackIosNew />
            </div>
        </div>
    )
}