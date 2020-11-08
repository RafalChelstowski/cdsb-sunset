import React from 'react';
import { Canvas } from 'react-three-fiber';
import {
  PerspectiveCamera,
  OrbitControls,
  MeshWobbleMaterial
} from '@react-three/drei';
import './styles.css';

// #fa5c18 #ffd881 #edd5cd #d97b7a #7189bf

function Sea() {
  return (
    <mesh position={[0, 6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleBufferGeometry args={[40, 50]} />
      <MeshWobbleMaterial
        color="#edd5cd"
        attach="material"
        factor={0.01}
        speed={1}
      />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas shadowMap colorManagement>
      <ambientLight intensity={0.4} />
      <pointLight
        position={[0, 15, 0]}
        decay={2}
        intensity={10}
        color="#fa5c18"
      />
      <Sea />
      <OrbitControls
        enableDamping={false}
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
      <PerspectiveCamera makeDefault position={[25, 7, 0]} fov={100} />
      <mesh position={[0, 3, 0]}>
        <sphereBufferGeometry args={[10, 32, 32]} />
        <MeshWobbleMaterial
          color="#ffd881"
          attach="material"
          factor={4}
          speed={0.5}
        />
      </mesh>
    </Canvas>
  );
}
