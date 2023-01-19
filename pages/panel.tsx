import Head from "next/head"
import Header from "../components/templates/Header"
import Footer from "../components/templates/Footer"
import { useSession } from "next-auth/react"
import Unauthorized from "./unauthorized"
import Content from "../components/panel/Content"

export default function Panel(): JSX.Element {
    const { status } = useSession()

    if (status === 'authenticated') {
        return (
            <>
                <Head>
                    <title>Painel</title>
                </Head>
                <Header />
                <Content/>
                <Footer />
            </>
        )
    } else {
        return <Unauthorized />
    }
}