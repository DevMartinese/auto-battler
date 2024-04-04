import { useGLTF } from '@react-three/drei';

const BmpLoadModel = (props) => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');
  return (
    <group {...props} dispose={null}>
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
  )
};


export default BmpLoadModel;

useGLTF.preload('models/uploads_files_3839708_Modification.glb');