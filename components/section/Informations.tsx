import styles from './Informations.module.css'

interface InformationProps {
    componentName: string
}

export default function Informations(props: InformationProps): JSX.Element {

    const { componentName } = props

    return (
        <>
            {componentName === 'home' ? (<div>{componentName}</div>) : componentName === 'exp' ? (<div>{componentName}</div>) : componentName === 'end' ? (<div>{componentName}</div>) : false}
        </>
    )
}