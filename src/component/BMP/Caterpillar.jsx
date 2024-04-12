import { useGLTF } from '@react-three/drei';

export const Caterpillar = () => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.caterpillar.geometry}
      material={materials.Metal028_}
      rotation={[0, 0, -Math.PI / 2]}
    />
  )
}