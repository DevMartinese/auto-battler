import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export const Wheel1 = () => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');
  const wheelPosition = [0.449, 0.124, 0.437];

  return (
    <RigidBody colliders="trimesh" position={wheelPosition}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wheel_3.geometry}
        material={materials['cgbookcase.painted-metal-03_png_1k_']}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </RigidBody>
  );
};
