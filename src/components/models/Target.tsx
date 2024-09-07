//@ts-nocheck

import { useGSAP } from "@gsap/react"
import { useGLTF } from "@react-three/drei"
import gsap from "gsap"
import { useRef } from "react"

export default function Target(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
    const targetRef = useRef()
    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1,
            repeat: -1,
            yoyo: true
        })
    })

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}
// { position }: { position: number[] }