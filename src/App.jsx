import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR, Controllers } from "@react-three/xr"; // Modern imports
import { useGLTF } from "@react-three/drei";

const App = () => {
  function Room() {
    const { scene } = useGLTF(
      "https://furnouserdatabase.s3.ap-south-1.amazonaws.com/users/user_760309/scene_a2052295/model_2489754749.glb"
    );

    // Note: For the user to feel "inside" the room, the 3D model's walls
    // should have their normals facing inwards, or be open from the top.
    // You may need to scale the room to feel life-sized.
    return <primitive object={scene} scale={1.5} />;
  }
  return (
    <>
      {/* The button to enter AR/VR */}
      <ARButton />

      <Canvas>
        {/* The XR component wraps everything that should be in the XR session */}
        <XR>
          {/* Add controllers, hands, etc. */}
          <Controllers />

          {/* Your 3D scene */}
          <ambientLight />
          <Suspense fallback={null}>
            <Room />
          </Suspense>
        </XR>
      </Canvas>
    </>
  );
};
export default App;
