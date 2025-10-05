"use client"

import { useControls } from "leva";
import { Environment, PerspectiveCamera } from "@react-three/drei";

import { Keyboard } from "@/components/Keyboard";

export function Scene () {
    const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls({
        positionX: 0,
        positionY: -0.5,
        positionZ: 3,
        rotationX: Math.PI/2,
        rotationY: 0,
        rotationZ: 0,
    });

    return (
        <group>
            <PerspectiveCamera 
                makeDefault
                position={[0, 0, 4]}
                fov={50}
            />

            <Keyboard 
                scale={9} 
                position={[0.2, -0.5, 1.9]} 
                rotation={[1.6, 0.4, 0]} 
            />
            
            <Environment 
                files={["/hdr/blue-studio.hdr"]}
                environmentIntensity={0.05}

            />
            
            <spotLight 
                position={[-2, 1.5, 3]}
                intensity={30}
                castShadow
                shadow-bias={-0.0002}
                shadow-normalBias={0.002}
                shadow-mapSize={1024}
            />
        </group>
    );
}