import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const Wheel1 = () => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');
  const wheelRef = useRef();

  // Rotar la rueda en cada cuadro
  useFrame(() => {
    if (wheelRef.current) {
      wheelRef.current.position.z += 0.01; // Ajusta este valor para controlar la velocidad de rotación
    }
  });

  return (
      <mesh
        ref={wheelRef}
        castShadow
        receiveShadow
        geometry={nodes.wheel_3.geometry}
        material={materials['cgbookcase.painted-metal-03_png_1k_']}
        rotation={[0, 0, -Math.PI / 2]}
      />
  );
};
