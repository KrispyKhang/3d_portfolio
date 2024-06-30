/* eslint-disable react/no-unknown-property */
/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, ...props }) => {
    const islandRef = useRef();

    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);


        const clientX = e.touches
            ? e.touches[0].clientX
            : e.clientX;

        lastX.current = clientX;
    }

    const handlePointerup = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);

        const clientX = e.touches
            ? e.touches[0].clientX
            : e.clientX;

        const delta = (clientX - lastX.current) / viewport.width;
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!isRotating) {
            handlePointerup(e);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Arrowleft') {
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += -0.01 * Math.PI;
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }


    useEffect(() => {
        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerup);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerup);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }

    }, [gl, handlePointerDown, handlePointerMove, handlePointerup, isRotating]);


    return (
        // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
        <a.group ref={islandRef} {...props}>
            <mesh
                geometry={nodes.polySurface944_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface945_tree1_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface946_tree2_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface947_tree1_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface948_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.polySurface949_tree_body_0.geometry}
                material={materials.PaletteMaterial001}
            />
            <mesh
                geometry={nodes.pCube11_rocks1_0.geometry}
                material={materials.PaletteMaterial001}
            />
        </a.group>
    );
}

export default Island;