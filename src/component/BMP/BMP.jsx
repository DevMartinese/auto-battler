import {
  Physics
} from '@react-three/cannon';
import { 
  Chassis 
} from "./Chassis";
import { 
  Wheels 
} from "./Wheel";

export const BMP = (props) => {
  return (
    <group {...props}>
      <Physics>
        <Chassis />
        <Wheels />
      </Physics>
    </group>
  );
}