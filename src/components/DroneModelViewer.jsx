import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DroneModel from "./DroneModel";
export default function DroneModelViewer({modelUrl,zoom}) {
  return (
    <div className="w-full h-full bg-transparent">
      <Canvas camera={{ position: [0, -7, 5] }}>
        <ambientLight intensity={0.1} /> 
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <directionalLight position={[-5, -2, -5]} intensity={0.3} />
        <directionalLight position={[0, 2, -5]} intensity={0.2} />
        <Suspense fallback={null}>
          <DroneModel modelUrl={modelUrl} />
        </Suspense>
        <OrbitControls enableZoom={zoom} />
      </Canvas>
    </div>
  );
}