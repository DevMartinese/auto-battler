import { Environment, OrbitControls, PivotControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { BMP } from "./component/BMP/BMP";
import { TMLoadModel } from "./component/tmLoadModel";

function App() {
  return (
    <>
      <Canvas 
        camera={{ position: [0, 11, 11] }} 
        shadows
      >
        <OrbitControls />

        <directionalLight 
          castShadow 
          position={[1, 2, 3]} 
          intensity={1.5} 
        />
        <ambientLight 
          intensity={0.5} 
        />
        
        <BMP 
          position-y={-1} 
          position-z={-5} 
        />

        <TMLoadModel 
          position-y={-1} 
          position-z={7} 
          position-x={-1.7} 
          rotation-y={2} 
        />

        <mesh 
          position-y={-1} 
          rotation-x={-Math.PI * 0.5} 
          scale={2} 
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <meshPhysicalMaterial color="#ccc" />
        </mesh>

        <Environment preset="sunset" />
      </Canvas>
    </>
  )
}

export default App
