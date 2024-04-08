import { Environment, OrbitControls } from "@react-three/drei"
import { BMP } from "../BMP/BMP"
import { Plane } from "../Plane/Plane"

export const Experience = () => {
  return (
    <>
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

      {/* <TMLoadModel
          position-y={-1}
          position-z={7}
          position-x={-1.7}
          rotation-y={2}
        /> */}

      <Plane />

      <Environment preset="sunset" />
    </>
  )
}