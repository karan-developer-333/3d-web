import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import AbstractObject from './AbstractObject';
import Particles from './Particles';

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: true
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <OrbitControls enableZoom={false} enablePan={false} />
        
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />
        <directionalLight position={[0, 5, 5]} intensity={2} />
        
        <AbstractObject />
        <Particles count={2000} />
        
        <Environment preset="city" />
        
        {/* Performance Optimizations */}
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Preload all />
      </Canvas>
    </div>
  );
}


