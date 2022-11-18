import styles from './Content.module.css'
import Introduction from './introduction/Introduction'

interface InformationProps {
    componentName: string
}

export default function Content(props: InformationProps): JSX.Element {

    const { componentName } = props

    return (
        <>
            {componentName === 'home' ? (<Introduction />) : componentName === 'exp' ? (<div>{componentName}</div>) : componentName === 'end' ? (<div>{componentName}</div>) : false}
        </>
    )
}