import { useGLTF } from '@react-three/drei';

export const Wheel = () => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');

  return (
    <group>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheel_3.geometry}
          material={materials['cgbookcase.painted-metal-03_png_1k_']}
          position={[0.449, 0.124, 0.437]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheel_1.geometry}
          material={materials['cgbookcase.painted-metal-03_png_1k_']}
          position={[0.447, 0.282, 0.701]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.caterpillar.geometry}
          material={materials.Metal028_}
          position={[0.445, 0.017, 0.605]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheel_2.geometry}
          material={materials['cgbookcase.painted-metal-03_png_1k_']}
          position={[0.44, 0.248, -0.956]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </group>
    </group>
  )
}