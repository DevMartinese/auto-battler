import { RigidBody } from '@react-three/rapier';

export const Plane = () => {
  return (
    <RigidBody type="static">  // Define el RigidBody como estático
      <mesh
        position={[0, -1, 0]}  // Ajusta la posición centrada y ligeramente por debajo de otros objetos
        rotation={[-Math.PI / 2, 0, 0]}  // Rota para alinear el plano horizontalmente
        scale={[20, 20, 1]}  // Escala ajustada para una superficie más amplia
        receiveShadow
      >
        <planeGeometry args={[1, 1]} />  // La geometría base del plano
        <meshPhysicalMaterial color="#ccc" />  // Material para visualización
      </mesh>
    </RigidBody>
  );
};
