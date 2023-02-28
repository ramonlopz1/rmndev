import Head from "next/head"
import Header from "../../components/templates/Header"
import Footer from "../../components/templates/Footer"
import { useSession } from "next-auth/react"
import Unauthorized from "../unauthorized"
import Create from "../../components/panel/create/Create"

export default function Upload(): JSX.Element {
    const { status } = useSession()

    if (status === 'authenticated') {
        return (
            <>
                <Head>
                    <title>Painel</title>
                </Head>
                <Header />
                <Create/>
                <Footer />
            </>
        )
    } else {
        return <Unauthorized />
    }
}