export const Plane = () => {
  return (
    <mesh
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