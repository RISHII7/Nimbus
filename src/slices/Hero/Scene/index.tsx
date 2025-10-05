"use client"

// import { useControls } from "leva";
import { Environment, PerspectiveCamera } from "@react-three/drei";

import { Keycap } from "@/components/Keycap";
import { Keyboard } from "@/components/Keyboard";

export function Scene() {
    // const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls({
    //     positionX: 0,
    //     positionY: -0.5,
    //     positionZ: 3,
    //     rotationX: Math.PI/2,
    //     rotationY: 0,
    //     rotationZ: 0,
    // });

    const scalingFactor = window.innerWidth <= 500 ? .5 : 1;

    return (
        <group>
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 4]}
                fov={50}
            />

            <group scale={scalingFactor}>
                <Keyboard
                    scale={9}
                    position={[0.2, -0.5, 1.9]}
                    rotation={[1.6, 0.4, 0]}
                    />

                <group>
                    <Keycap position={[0, -0.4, 2.6]} rotation={[0, 2, 3]} texture={0} />
                    <Keycap position={[-1.4, 0, 2.3]} rotation={[3, 2, 1]} texture={1} />
                    <Keycap position={[-1.8, 1, 1.5]} rotation={[0, 1, 3]} texture={2} />
                    <Keycap position={[0, 1, 1]} rotation={[0, 4, 2]} texture={3} />
                    <Keycap position={[0.7, 0.9, 1.4]} rotation={[3, 2, 0]} texture={4} />
                    <Keycap
                        position={[1.3, -0.3, 2.3]}
                        rotation={[1, 2, 0]}
                        texture={5}
                        />
                    <Keycap position={[0, 1, 2]} rotation={[2, 2, 3]} texture={6} />
                    <Keycap position={[-0.7, 0.6, 2]} rotation={[1, 4, 0]} texture={7} />
                    <Keycap
                        position={[-0.77, 0.1, 2.8]}
                        rotation={[3, 2, 3]}
                        texture={8}
                        />
                    <Keycap position={[2, 0, 1]} rotation={[0, 0, 3]} texture={7} />
                </group>
            </group>            

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