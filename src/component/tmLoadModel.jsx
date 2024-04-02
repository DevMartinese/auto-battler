import { useGLTF } from '@react-three/drei'

export function TMLoadModel(props) {
  const { nodes, materials } = useGLTF('models/uploads_files_5111602_T-72M.glb')
  
  const scale = [0.04, 0.04, 0.04];
 
  return (
    <group {...props} dispose={null} scale={scale}>
      <group position={[3.191, 0, 51.623]} rotation={[Math.PI / 2, 0, -1.212]} >
        <mesh castShadow receiveShadow geometry={nodes.ad.geometry} material={materials.Accent} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5996.geometry}
          material={materials.Tracks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6004.geometry}
          material={materials.Strips}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6015.geometry}
          material={materials.Turret}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6017.geometry}
          material={materials.Turret}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6018.geometry}
          material={materials.Turret}
          position={[-0.413, 0.117, -0.035]}
          rotation={[-0.009, -0.025, -0.005]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6019.geometry}
          material={materials.Turret}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6027.geometry}
          material={materials.Turret}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface6008.geometry}
        material={materials.Accent}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface6026.geometry}
        material={materials.Hull}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface6020001.geometry}
        material={materials.Hull}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface6036.geometry}
        material={materials.Strips}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube5.geometry}
        material={materials.lambert2}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube6.geometry}
        material={materials.Hull}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube7.geometry}
        material={materials.Hull}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube9.geometry}
        material={materials.Hull}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube11.geometry}
        material={materials.Hull}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface6044.geometry}
        material={materials.Hull}
        position={[3.191, 0, 51.623]}
        rotation={[Math.PI / 2, 0, -1.212]}
      />
    </group>
  )
}

useGLTF.preload('models/uploads_files_5111602_T-72M.glb')