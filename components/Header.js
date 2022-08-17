import Head from "next/head"
import { useRouter } from "next/router"

export default function Header() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Fwoom</title>
                <meta name="description" content="2 person video calling" />
                <link rel="icon" href="/tv.ico" />
            </Head>
            <header className="mt-4 text-emerald-200 font-black text-center text-4xl uppercase">
                {router.asPath === "/" ? (
                    <h1>welcome to Fwoom</h1>
                ) : (
                    <h1>fwoom</h1>
                )}
            </header>
        </>
    )
}
