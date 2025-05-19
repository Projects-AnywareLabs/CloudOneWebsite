import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function DroneModel({ modelUrl }) {
  const model = useLoader(FBXLoader, modelUrl);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
    //   modelRef.current.rotation.z += 0.01;
    }
  });

  return <primitive ref={modelRef} object={model} scale={0.0005} />;
}
