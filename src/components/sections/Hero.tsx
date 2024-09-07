import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../models/HackerRoom'
import { Suspense } from 'react'
import CanvasLoader from '../models/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../../lib/constants'
import Target from '../models/Target'
import ReactLogo from '../models/ReactLogo'

export default function Hero() {

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-center text-white font-generalsans'>
                    Hi, I am Hamidreza <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    Building Responsive web applications
                </p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 30]}
                        />
                        <HackerRoom
                            scale={sizes.deskScale}
                            position={sizes.deskPosition}
                            rotation={[3.6, 0.2, -3.1]}
                        />
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight intensity={0.5} position={[0, 0, 10]} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
