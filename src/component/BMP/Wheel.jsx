import { Caterpillar } from "./Caterpillar"
import { Wheel1 } from "./Wheel1"
import { Wheel2 } from "./Wheel2"
import { Debug } from '@react-three/cannon';

export const Wheels = () => {
  return (
    <group>
      <Wheel1 />
      <Wheel2 />
      <Debug color="black" scale={4.4}>
        <Caterpillar />
      </Debug>
    </group>
  )
}