import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { BMP } from "./component/BMP/BMP";
import { TMLoadModel } from "./component/tmLoadModel";
import { Plane } from "./component/Plane/Plane";

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

        <Plane />

        <Environment preset="sunset" />
      </Canvas>
    </>
  )
}

export default App
