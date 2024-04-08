import { RigidBody } from '@react-three/rapier'

export const Plane = () => {
  return (
    <RigidBody>
      <mesh
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={2}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <meshPhysicalMaterial color="#ccc" />
      </mesh>
    </RigidBody>
  )
}