import {
  useEffect,
  useRef
} from 'react';
import {
  useRaycastVehicle,
  useBox
} from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { Chassis } from "./Chassis";
import { Wheel } from "./Wheel";

export const BMP = (props) => {
  return (
    <group {...props}>
      <Chassis />
      <Wheel />
    </group>
  );
}