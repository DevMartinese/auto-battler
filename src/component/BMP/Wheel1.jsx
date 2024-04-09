import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const Wheel1 = ({ wheel1Ref }) => {
  const { nodes, materials } = useGLTF('models/uploads_files_3839708_Modification.glb');
  
  return (
    <mesh
      ref={wheel1Ref}
      castShadow
      receiveShadow
      geometry={nodes.wheel_3.geometry}
      material={materials['cgbookcase.painted-metal-03_png_1k_']}
      rotation={[0, 0, -Math.PI / 2]}
    />
  );
};
