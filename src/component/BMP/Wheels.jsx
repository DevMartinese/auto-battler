import { RigidBody } from '@react-three/rapier';
import { Caterpillar } from "./Caterpillar"
import { Wheel1 } from "./Wheel1"
import { Wheel2 } from "./Wheel2"

export const Wheels = () => {
  return (
    <group>
      <Wheel1 />
      <Wheel2 />
      <Caterpillar />
    </group>
  )
}