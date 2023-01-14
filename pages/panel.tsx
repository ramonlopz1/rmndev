import Header from "../components/templates/Header"
import Footer from "../components/templates/Footer"
import { useSession } from "next-auth/react"
import Unauthorized from "./unauthorized"

export default function Panel(): JSX.Element {
    const { status } = useSession()

    if (status === 'authenticated') {
        return (
            <div>
                <Header />
                <div>Panel</div>
                <Footer />
            </div>
        )
    } else {
        return <Unauthorized/>
    }
}