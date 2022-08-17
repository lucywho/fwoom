import Script from "next/script"
import { useRouter } from "next/router"

import Gohome from "components/Gohome"

export default function Join() {
    const router = useRouter()
    const { id } = router.query
    let peer

    return (
        <>
            <Script
                src="https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js"
                onLoad={async () => {
                    peer = new Peer(`room-${id}-second`)
                    console.log("join peer: ", peer)

                    const localStream =
                        await navigator.mediaDevices.getUserMedia({
                            video: true,
                            audio: true,
                        })
                    document.querySelector("video#local").srcObject =
                        localStream

                    const call = peer.call(`room-${id}-first`, localStream)

                    call.on("stream", (remoteStream) => {
                        document.querySelector("video#remote").srcObject =
                            remoteStream
                    })
                }}
            />
            <div className="mt-10 mb-10 text-center text-3xl font-black text-orange-300">
                <p>
                    welcome to chat number{" "}
                    <span className="text-sky-400">{id}</span>
                </p>
            </div>

            <div className="mt-6 flex w-2/3 mx-auto">
                <video
                    id="local"
                    className="border-2 border-red-800 rounded-2xl w-1/2"
                    autoPlay
                    playsInline
                    muted
                ></video>
                <video
                    id="remote"
                    className="ml-2 border-2 border-sky-400 rounded-2xl w-1/2"
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
