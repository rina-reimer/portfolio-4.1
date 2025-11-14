'use client'
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import {Model} from "./Strawhat_duck";

export default function Animation() {

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <Model />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />  */}
    </Canvas>
  );
}

useGLTF.preload("/strawhat_duck/scene.gltf");