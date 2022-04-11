import { OrbitControls, useContextBridge } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BuildingsContext } from "features/home/context";

import { Buildings } from "./components";

export const Scene = () => {
  const ContextBridge = useContextBridge(BuildingsContext);

  return (
    <Canvas
      style={{ height: "calc(100vh - 5rem)" }}
      camera={{
        up: [0, 0, 1],
        position: [88000, -36000, 42000],
        near: 1000,
        far: 400000,
        fov: 70,
      }}
    >
      <color attach="background" args={["#fafafa"]} />
      <ambientLight intensity={1.0} />
      <directionalLight intensity={0.2} position={[1, 1, 1]} />
      <ContextBridge>
        <Buildings />
      </ContextBridge>
      <OrbitControls />
    </Canvas>
  );
};
