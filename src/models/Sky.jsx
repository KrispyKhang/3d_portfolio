import React from 'react'
import { useGLTF } from '@react-three/drei';

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(skyScene);
    return (
        <mesh>
            {/*  we use the primitive oject whe we want to directly embed a complex 3d model or scene */}
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky