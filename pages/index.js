import Router from "next/router"

export default function Home() {
    return (
        <>
            <p className="mt-10 ml-10 text-orange-300 text-3xl">
                Simple video calling for simple people:
            </p>
            <ol className="ml-10 text-sky-400 text-3xl">
                <li>click on "create new chat"</li>
                <li>share the link with a friend</li>
                <li>chat</li>
            </ol>
            <button
                className=" block mx-auto text-orange-300 bg-red-800 hover:text-red-800 hover:bg-orange-300 p-3 rounded-2xl mt-20 text-2xl font-bold"
                onClick={() => {
                    Router.push(`/room/${crypto.randomUUID().split("-")[0]}`)
                }}
            >
                create new chat
            </button>
        </>
    )
}
