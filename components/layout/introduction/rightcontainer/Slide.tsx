import { useState } from 'react'
import styles from './Slide.module.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

export default function Slide(): JSX.Element {

    const [translate, setTranslate] = useState(0)

    const btnHandler = (event: React.MouseEvent<Element, MouseEvent>, btnIndex: number) => {
        let increment = translate
        if (btnIndex === 0 && increment < 0) {
            increment += 220
            console.log(increment)
            setTranslate(increment)

        } else if (btnIndex === 1 && increment > -880) {
            increment -= 220
            console.log(increment)
            setTranslate(increment)
        }
    }

    return (
        <div className={styles.slide}>
            <button
                className={styles.slide_btn}
            >
                <MdOutlineArrowBackIosNew
                    onClick={event => btnHandler(event, 0)}
                />
            </button>
            <div className={styles.wrapper_overflowhidden}>
                <div
                    className={styles.content}
                    style={{ transform: `translateX(${translate}px)` }}
                >
                    <div className={styles.content_element}>
                        <div className={styles.element_links}>
                            A B
                        </div>
                    </div>
                    <div className={styles.content_element}>
                        <div className={styles.element_links}>
                            A B
                        </div>
                    </div>
                    <div className={styles.content_element}>
                        <div className={styles.element_links}>
                            A B
                        </div>
                    </div>
                    <div className={styles.content_element}>
                        <div className={styles.element_links}>
                            A B
                        </div>
                    </div>
                    <div className={styles.content_element}>
                        <div className={styles.element_links}>
                            A B
                        </div>
                    </div>
                    <div className={styles.content_element}>
                        <div className={styles.element_links}>
                            A B
                        </div>
                    </div>
                    <div className={styles.content_element}>
                        <div className={styles.element_links}>
                            A B
                        </div>
                    </div>
                </div>
            </div>
            <button
                className={styles.slide_btn}
                onClick={event => btnHandler(event, 1)}
            >
                <MdOutlineArrowForwardIos />
            </button>
        </div>
    )
}