import { useGLTF } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

export const Wheel1 = () => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');
  const wheelPosition = [0.449, 0.124, 0.437]; // Asumiendo que esta es la posición correcta de la rueda
  const wheelSize = [0.5, 0.5, 0.5]; // Tendrías que ajustar esto a las dimensiones reales de la rueda

  return (
    <RigidBody colliders="cuboid" position={[1, 5, 2]}>
      <CuboidCollider args={wheelSize}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheel_3.geometry}
          material={materials['cgbookcase.painted-metal-03_png_1k_']}
          position={wheelPosition}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </CuboidCollider>
    </RigidBody>
  );
};
