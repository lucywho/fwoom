import Link from "next/link"

export default function Gohome() {
    return (
        <>
            <Link href="/">
                <button className="block w-fit mx-auto text-orange-300 bg-red-800 hover:text-red-800 hover:bg-orange-300 p-3 rounded-2xl mt-10 text-2xl font-bold">
                    end chat and return to home page
                </button>
            </Link>
        </>
    )
}
