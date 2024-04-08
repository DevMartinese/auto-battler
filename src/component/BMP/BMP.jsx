import { Chassis } from "./Chassis";
import { Wheels } from "./Wheels";

export const BMP = (props) => {
  return (
    <group {...props}>
      <Chassis />
      <Wheels />
    </group>
  );
}