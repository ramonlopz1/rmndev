import SWR from 'swr'
import { useEffect, useState } from "react"

export type ProjectsList = {
    _id: string,
    name: string,
    filter: string,
    technologies: { _id: string, name: string }[],
    uri: string,
    img: string,
    type: string
    date?: Date  // implements later. update mongodb schemas > then show date informate on each project card.
}[]

export default function useSlide() {

    // test later
    // const { data, error } = useSWR('/api/projects', fetch)
    // if (error) return <div>failed to load</div>;
    // if (!data) return <div>loading...</div>;
    // return <div>hello {data.name}!</div>;

    // States: Get MongoDB Data, set to Local Storage and set translate of X
    const [mongoData, setMongoData] = useState<ProjectsList>(<ProjectsList>[])
    const [localData, setLocalData] = useState<ProjectsList>(<ProjectsList>[])
    const [translateCard, setTranslateCard] = useState<number>(<number>0)

    useEffect(setLocalStorage, [mongoData])

    function setLocalStorage(): void {
        localStorage.setItem("projects", JSON.stringify(mongoData))
        const localStg: ProjectsList = JSON.parse(localStorage.getItem("projects"))
        setLocalData(localStg)
    }

    useEffect(fetchMongoDBData, [])

    function fetchMongoDBData(): void {
        fetch('/api/projects')
        .then(res => res.json())
        .then(res => setMongoData(res))
    }

    return {
        localData, translateCard, setTranslateCard
    }
}