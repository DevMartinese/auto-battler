import { useGLTF } from '@react-three/drei';

export const Caterpillar = () => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');

  const positionsArray = nodes.caterpillar.geometry.attributes.position.array;
  const hasNaN = positionsArray.some(value => isNaN(value));
  console.log(hasNaN)
  if (hasNaN) {
    console.error('La geometría tiene valores NaN', positionsArray);
  }

  const [ref] = useTrimesh(() => ({
    args: [nodes.caterpillar.geometry.attributes.position.array, nodes.caterpillar.geometry.index.array],
    mass: 1,
    position: [0.445, 0.017, 0.605],
    rotation: [0, 0, -Math.PI / 2]
  }),
    useRef())

  return (
    <mesh ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.caterpillar.geometry}
      material={materials.Metal028_}
      position={[0.445, 0.017, 0.605]}
      rotation={[0, 0, -Math.PI / 2]}
    />
  )
}