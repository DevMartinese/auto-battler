import { useRef } from 'react';
import { useTrimesh } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';
import { MeshNormalMaterial } from 'three'

export const Caterpillar = (props) => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');

  console.log("NODES====>", nodes);

  // const [ref] = useTrimesh(() => ({
  //   args: [nodes.caterpillar.geometry.attributes.position.array, nodes.caterpillar.geometry.index.array],
  //   mass: 1,
  //   position: [0.445, 0.017, 0.605],
  //   rotation: [0, 0, -Math.PI / 2]
  // }),
  //   useRef())

  return (
    <mesh 
      castShadow
      receiveShadow
      geometry={nodes.caterpillar.geometry}
      material={materials.Metal028_} // material={new MeshNormalMaterial()}
      position={[0.445, 0.017, 0.605]}
      rotation={[0, 0, -Math.PI / 2]}
    />
  )
}