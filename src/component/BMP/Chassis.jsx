import { useGLTF } from '@react-three/drei';

export const Chassis = () => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');

  return (
    <mesh dispose={null}>
      <group position={[0, 0.597, -0.306]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials['cgbookcase.painted-metal-03_png_1k_']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_1.geometry}
          material={materials.SheetMetal004_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_2.geometry}
          material={materials['kc-glass-rough_']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_3.geometry}
          material={materials.Metal028_}
        />
      </group>
    </mesh>
  )
}

useGLTF.preload('models/uploads_files_3839708_Modification.glb');