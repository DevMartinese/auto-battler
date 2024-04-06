import {
  Chassis
} from "./Chassis";
import {
  Wheels
} from "./Wheel";

export const BMP = (props) => {
  return (
    <group {...props}>
      <Chassis />
      <Wheels />
    </group>
  );
}