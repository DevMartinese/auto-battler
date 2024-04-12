import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Wheel1 } from "./Wheel1"
import { Wheel2 } from "./Wheel2"
import { Caterpillar } from "./Caterpillar"

export const Wheels = () => {
  const wheel1Position = [0.449, 0.124, 0.437];
  const caterpillarPosition = [0.445, 0.017, 0.605]

  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.z += 0.01;  // Move the whole group forward along Z-axis
    }
  });

  return (
    <group ref={groupRef}>
      <RigidBody
        colliders="trimesh"
        position={wheel1Position}
        allowSleep={false}
      >
        <Wheel1 />
      </RigidBody>
      
      <RigidBody 
        colliders="trimesh" 
        position={caterpillarPosition}
        allowSleep={false}
      >
      <Caterpillar />
      </RigidBody>
      {/* <Wheel2 /> */}
    </group>
  )
}