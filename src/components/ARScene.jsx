import React from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// This component loads your entire room model.
function Room({ modelUrl }) {
  const { scene } = useGLTF(modelUrl);

  // Note: For the user to feel "inside" the room, the 3D model's walls
  // should have their normals facing inwards, or be open from the top.
  // You may need to scale the room to feel life-sized.
  return <primitive object={scene} scale={1.5} />;
}

export default function ARScene({ modelUrl }) {
  return (
    <>
      {/* Basic lighting for the scene */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* The Player component represents the user's position in the AR world.
        We place the Room component inside the Player, which means the room
        will be centered on the user when they start the AR session.
      */}
      <Canvas>
        <Room modelUrl={modelUrl} />
      </Canvas>
    </>
  );
}
