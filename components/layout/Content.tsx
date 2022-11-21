import Introduction from './introduction/Introduction'
import Education from './education/Education'
import Contact from './contact/Contact'

interface InformationProps {
    componentName: string
}

export default function Content(props: InformationProps): JSX.Element {

    const { componentName } = props

    return (
        <>
            {componentName === 'home' ? (<Introduction />)
                : componentName === 'education' ? (<Education />)
                    : componentName === 'end' ? (<Contact />) : false}
        </>
    )
}