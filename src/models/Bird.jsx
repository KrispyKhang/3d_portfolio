import React from 'react'
import { useGLTF } from '@react-three/drei';

import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
    // scene is the 3d model and animations are the animations that come with the model
    // it comes from the useGLTF hook
    // a hook is a function that allows you to use state and other React features inside functional components
    const { scene, animations } = useGLTF(birdScene);
    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>

            <primitive object={scene} />
        </mesh>
    )
}

export default Bird