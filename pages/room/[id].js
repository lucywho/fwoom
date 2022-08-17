import Link from "next/link"
import Script from "next/script"
import { useRouter } from "next/router"

import Gohome from "components/Gohome"

export default function Room() {
    const router = useRouter()
    const { id } = router.query
    let peer
    let inviteUrl

    if (typeof window !== undefined) {
        inviteUrl = window.location.href
    }

    return (
        <>
            <Script
                src="https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js"
                onLoad={async () => {
                    peer = new Peer(`room-${id}-first`)
                    console.log("first peer: ", peer)

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
            <h1 className="mt-10 text-center text-3xl font-black text-orange-300">
                welcome to chat number{" "}
                <span className="text-sky-400">{id}</span>
            </h1>

            <div className="mt-10 mb-10 text-center text-2xl text-emerald-200">
                share this link to invite someone else to join in:{" "}
                <a
                    className="text-sky-400 hover:underline"
                    href={`/room/${id}/join`}
                >
                    {inviteUrl} <br />
                </a>
                <button
                    className="text-orange-300 hover:underline mt-1"
                    onClick={() => navigator.clipboard.writeText(inviteUrl)}
                >
                    copy link to clipboard
                </button>
            </div>

            <div className="mt-6 flex w-3/4 mx-auto justify-center">
                <video
                    id="local"
                    className="border-2 border-sky-400 rounded-2xl w-1/2"
                    autoPlay
                    playsInline
                    muted
                ></video>
                <video
                    id="remote"
                    className="ml-2 border-2 border-red-800 rounded-2xl w-1/2"
                    autoPlay
                    playsInline
                ></video>
            </div>
            <a onClick={() => peer.destroy()}>
                <Gohome />
            </a>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}
