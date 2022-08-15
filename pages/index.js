import Router from "next/router"

export default function Home() {
    return (
        <>
            <h1
                className="mt-20 text-center 
    text-4xl uppercase text-emerald-200 font-black"
            >
                Welcome to Fwoom
            </h1>

            <button
                className=" block mx-auto text-orange-300 bg-red-800 hover:text-red-800 hover:bg-orange-300 p-3 rounded-2xl mt-20 text-2xl "
                onClick={() => {
                    Router.push(`/room/${crypto.randomUUID().split("-")[0]}`)
                }}
            >
                Create a new chat room
            </button>
        </>
    )
}
