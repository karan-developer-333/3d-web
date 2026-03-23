import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function AbstractObject() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const { clock, mouse } = state;
    
    // Base rotation
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    
    // Mouse interaction - rotate towards mouse
    meshRef.current.rotation.x += mouse.y * 0.5;
    meshRef.current.rotation.y += mouse.x * 0.5;
    
    // Subtle floating motion
    meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
    meshRef.current.position.x = Math.cos(clock.getElapsedTime() * 0.5) * 0.05;
  });

  return (
    <Sphere ref={meshRef} args={[1, 128, 128]} scale={1.5}>
      <MeshDistortMaterial
        color="#ffffff"
        roughness={0.05}
        metalness={0.8}
        distort={0.4}
        speed={2}
        emissive="#111111"
      />
    </Sphere>
  );
}


