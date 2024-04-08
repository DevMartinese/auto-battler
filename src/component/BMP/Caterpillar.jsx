import { useGLTF } from '@react-three/drei';

export const Caterpillar = () => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.caterpillar.geometry}
      material={materials.Metal028_}
      position={[0.445, 0.017, 0.605]}
      rotation={[0, 0, -Math.PI / 2]}
    />
  )
}