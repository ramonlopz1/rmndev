import { useState, useEffect } from 'react'
import styles from './Slide.module.css'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import { GetStaticProps } from 'next'
import useSlide, { ProjectsList } from '../../../../hooks/useSlide'
import Loading from '../../../templates/Loading'

import Image from 'next/image'

interface SlideProps {
    filter: string // all / new / old
    type: string // web or designer
}

export default function Slide(props: SlideProps): JSX.Element {
   const { localData, translateCard, setTranslateCard } = useSlide()

    const renderCardProject = (): JSX.Element[] => {
        let data: ProjectsList

        if (props.filter === `all`) {
            data = localData
        } else {
            data = localData.filter(project => {
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
        let increment = translateCard
        if (btnIndex === 0 && increment < 0) {
            increment += 220
            setTranslateCard(increment)
        } else if (btnIndex === 1 && increment > -880) {
            increment -= 220
            setTranslateCard(increment)
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
                    style={{ transform: `translateX(${translateCard}px)` }}
                >
                    {localData ? renderCardProject() : <Loading />}
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