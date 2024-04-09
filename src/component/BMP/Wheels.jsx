import { RigidBody } from '@react-three/rapier';
import { Caterpillar } from "./Caterpillar"
import { Wheel1 } from "./Wheel1"
import { Wheel2 } from "./Wheel2"

export const Wheels = () => {
  const wheelPosition = [0.449, 0.124, 0.437];

  return (
    <group>
      <RigidBody
        colliders="trimesh"
        position={wheelPosition}
      >
        <Wheel1 />
      </RigidBody>
      {/* <Wheel2 />
      <Caterpillar /> */}
    </group>
  )
}