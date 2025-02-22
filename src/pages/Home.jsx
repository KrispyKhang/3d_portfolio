import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { Suspense, useEffect, useRef, useState } from 'react'


import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import summer from '../assets/SummerAir.mp3'
import soundon from '../assets/icons/soundon.png'
import soundoff from '../assets/icons/soundoff.png'




const Home = () => {
    const audioRef = useRef(new Audio(summer));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1)
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);



    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        }
        else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }


    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43.4]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        }
        else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition,]
    };

    const [islandScale, islandPosition] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative">

            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[2, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />
                    <Sky isRotating={isRotating} />
                    <Bird />


                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={[0.1, 4.7077, 0]}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        scale={planeScale}
                        position={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0]}
                    />


                </Suspense>
            </Canvas>
            <div className='absolute bottom-2 left-2'>
                <img
                    src={isPlayingMusic ? soundoff : soundon}
                    alt='sound'
                    className='w-10 h-10 cursor-pointer'
                    onClick={() => { isPlayingMusic ? audioRef.current.pause() : audioRef.current.play(); setIsPlayingMusic(!isPlayingMusic) }}

                />
            </div>
        </section >
    )
}

export default Home