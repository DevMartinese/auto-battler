import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from '@react-three/rapier';
import { Experience } from "./component/Experience";

function App() {
  return (
    <Canvas
      camera={{ position: [0, 11, 11] }}
      shadows
    >
      <Suspense>
        <Physics debug>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App
