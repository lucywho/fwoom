import Script from "next/script"
import { useRouter } from "next/router"

import Gohome from "components/Gohome"

export default function Room() {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Script
                src="https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js"
                onLoad={async () => {
                    const peer = new Peer(`room-${id}-first`)

                    const localStream =
                        await navigator.mediaDevices.getUserMedia({
                            video: true,
                            audio: true,
                        })

                    document.querySelector("video#local").srcObject =
                        localStream

                    peer.on("call", (call) => {
                        call.answer(localStream)
                        call.on("stream", (remoteStream) => {
                            document.querySelector("video#remote").srcObject =
                                remoteStream
                        })
                    })
                }}
            />
            <h1 className="mt-20 text-center text-3xl uppercase font-black text-orange-300">
                welcome to your chatroom
            </h1>
            <p className="mt-20 mb-20 text-center text-3xl text-emerald-200">
                Share this link to invite others to join the room: <br />
                <a
                    className="text-sky-600 hover:underline"
                    href={`/room/${id}/join`}
                >
                    http://localhost:3000/room/{id}/join
                </a>
            </p>
            <div className="mt-4 text-center text-2xl  text-orange-300">
                room id: {id}
            </div>
            <div className="mt-10 flex border w-2/3 mx-auto">
                <video id="local" autoPlay playsInline muted></video>
                <video id="remote" autoPlay playsInline></video>
            </div>

            <Gohome />
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}
