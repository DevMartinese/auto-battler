import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Wheel1 } from "./Wheel1"
import { Wheel2 } from "./Wheel2"
import { Caterpillar } from "./Caterpillar"

export const Wheels = () => {
  const wheel1Position = [0.449, 0.124, 0.437];

  const wheel1Ref = useRef();

  // Rotar la rueda en cada cuadro
  useFrame(() => {
    if (wheel1Ref.current) {
      wheel1Ref.current.position.z += 0.01; // Ajusta este valor para controlar la velocidad de rotación
    }
  });

  return (
    <group>
      <RigidBody
        colliders="trimesh"
        position={wheel1Position}
      >
        <Wheel1 wheel1Ref={wheel1Ref} />
      </RigidBody>
      {/* <Wheel2 />
      <Caterpillar /> */}
    </group>
  )
}