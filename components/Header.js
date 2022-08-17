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
            <header className="w-full py-10 px-10 text-emerald-200 font-black  text-6xl uppercase italic inline-flex items-center border-b-2 border-b-orange-300">
                <img src="/tv.ico" alt="tv icon" className="mr-4" />
                {router.asPath === "/" ? (
                    <h1>welcome to Fwoom</h1>
                ) : (
                    <h1>fwoom</h1>
                )}
            </header>
        </>
    )
}
