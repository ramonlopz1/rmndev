import { useState, useEffect } from 'react'
import styles from './Slide.module.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

export default function Slide(): JSX.Element {

    const [projectList, setProjectList] = useState([])
    const [translate, setTranslate] = useState(0)

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(res => setProjectList(res))
    }, [])

    const renderProjects = () => {
        return projectList.map((project, i) => {
            return (
                <div className={styles.content_element} key={i}>
                    <div className={styles.element_links}>
                        A B
                    </div>
                </div>
            )
        })
    }

    const btnHandler = (event: React.MouseEvent<Element, MouseEvent>, btnIndex: number) => {
        let increment = translate
        if (btnIndex === 0 && increment < 0) {
            increment += 220
            setTranslate(increment)
        } else if (btnIndex === 1 && increment > -880) {
            increment -= 220
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
                    {renderProjects()}
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