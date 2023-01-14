import Link from "next/link"
export default function Unauthorized(): JSX.Element {
    const styled = {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    return (
        <div style={{ ...styled }}>
            <div>Unauthorized</div>
            <Link href="/">Voltar</Link>
        </div>
    )
}
