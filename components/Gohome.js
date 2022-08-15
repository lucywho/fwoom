import Link from "next/link"

export default function Gohome() {
    return (
        <>
            <Link href="/">
                <a className="block w-fit mx-auto text-orange-300 bg-red-800 hover:text-red-800 hover:bg-orange-300 p-3 rounded-2xl mt-20 text-2xl">
                    Return to Home Page
                </a>
            </Link>
        </>
    )
}
