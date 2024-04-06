import { useRef } from "react";
import { usePlane } from "@react-three/cannon";

export const Plane = (props) => {

  const [ref] = usePlane(() => ({ mass: 0, ...props }), useRef())

  return (
    <mesh ref={ref}
      position-y={-1}
      rotation-x={-Math.PI * 0.5}
      scale={2}
      receiveShadow
    >
      <planeGeometry args={[10, 10]} />
      <meshPhysicalMaterial color="#ccc" />
    </mesh>
  )
}