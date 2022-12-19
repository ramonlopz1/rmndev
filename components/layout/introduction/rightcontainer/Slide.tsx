import { useState, useEffect } from 'react'
import styles from './Slide.module.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import { GetStaticProps } from 'next'
import Loading from '../../../templates/Loading'

import Image from 'next/image'

// export const getStaticProps: GetStaticProps = async (context) => {
//     // ...

//     return {
//         props: ""
//     }
// }
interface SlideProps {
    filter: string
    type: string
}

type ProjectsList = {
    _id: string,
    name: string,
    filter: string,
    technologies: { _id: string, name: string }[],
    uri: string,
    img: string,
    type: string
}[]

export default function Slide(props: SlideProps): JSX.Element {

    const [mongoData, setMongoData] = useState<ProjectsList>([])
    const [allData, setAllData] = useState<ProjectsList>([])
    const [translate, setTranslate] = useState<number>(0)

    useEffect((): void => {
        localStorage.setItem("projects", JSON.stringify(mongoData))
        const localStg: ProjectsList = JSON.parse(localStorage.getItem("projects"))
        setAllData(localStg)
    }, [mongoData])


    useEffect((): void => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(res => setMongoData(res))
    }, [])

    const renderCardProject = (): JSX.Element[] => {
        let data: ProjectsList

        if (props.filter === `all`) {
            data = allData
        } else {
            data = allData.filter(project => {
                return project.filter === props.filter
            })
        }

        return data.map((project, i): JSX.Element => {
            if (project.type === props.type) {
                return (
                    <div className={styles.content_element} key={i}>
                        <Image src={project.uri} alt="project img" fill />
                        {renderCardLabel(project.name)}
                    </div>
                )
            }
        })
    }

    const renderCardLabel = (name: string): JSX.Element => {
        return (
            <div className={styles.element_links}>
                <span className={styles.label_name}>{name}</span>
                <span className={styles.label_icon}>like</span>
                <span className={styles.label_like}>12</span>
            </div>
        )
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
                    {allData ? renderCardProject() : <Loading />}
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