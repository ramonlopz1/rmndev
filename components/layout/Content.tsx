import Introduction from './introduction/Introduction'
import Education from './education/Education'

interface InformationProps {
    componentName: string
}

export default function Content(props: InformationProps): JSX.Element {

    const { componentName } = props

    return (
        <>
            {componentName === 'home' ? (<Introduction />) 
            : componentName === 'education' ? (<Education />) : componentName === 'end' ? (<div>{componentName}</div>) : false}
        </>
    )
}