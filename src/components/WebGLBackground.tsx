import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

const Particles = ({ count }: { count: number }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const [particles] = useState(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  });

  useFrame((state) => {
    particles.forEach((particle, i) => {
      const { factor, speed, xFactor, yFactor, zFactor } = particle;
      const t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (state.pointer.x * 1000 - particle.mx) * 0.01;
      particle.my += (state.pointer.y * 1000 - particle.my) * 0.01;
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
    if (light.current) {
      // Smoother light movement
      light.current.position.lerp(new THREE.Vector3(state.pointer.x * 20, state.pointer.y * 20, 10), 0.1);
    }
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={15} color="#ff3333" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial color="#444" roughness={0.1} metalness={0.8} emissive="#ff0000" emissiveIntensity={0.2} />
      </instancedMesh>
    </>
  );
};

const WebGLBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', background: '#000' }}>
      <Canvas 
        camera={{ fov: 75, position: [0, 0, 30] }}
        gl={{ antialias: false, powerPreference: "high-performance" }} // Performance optimization
        dpr={[1, 2]} // Limit pixel ratio for mobile lag reduction
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="white" />
        <Particles count={250} /> {/* Reduced count from 400 to 250 for better performance */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default WebGLBackground;
