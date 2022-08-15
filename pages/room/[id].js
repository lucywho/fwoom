import Gohome from "components/Gohome"

export default function Room() {
    let chatroom

    if (typeof window !== "undefined") {
        chatroom = window.location.pathname.slice(-8)
    }

    return (
        <>
            <h1 className="mt-20 text-center text-3xl uppercase font-black text-emerald-200">
                Welcome to your chatroom
            </h1>
            <div className="mt-20 text-center text-2xl  text-orange-300">
                room id: {chatroom}
            </div>
            <Gohome />
        </>
    )
}
