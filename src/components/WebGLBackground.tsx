import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

/* ─── Central 3D Focal Point ─── */
const CentralShape = () => {
  const groupRef  = useRef<THREE.Group>(null);
  const ring1Ref  = useRef<THREE.Mesh>(null);
  const ring2Ref  = useRef<THREE.Mesh>(null);
  const ring3Ref  = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y  = t * 0.1;
      groupRef.current.rotation.x  = Math.sin(t * 0.07) * 0.15;
      // Gentle mouse pull
      groupRef.current.position.x += (state.pointer.x * 4 - groupRef.current.position.x) * 0.018;
      groupRef.current.position.y += (state.pointer.y * 4 - groupRef.current.position.y) * 0.018;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.z += 0.004;
    if (ring2Ref.current) ring2Ref.current.rotation.x += 0.003;
    if (ring3Ref.current) ring3Ref.current.rotation.y += 0.0025;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Core icosahedron */}
      <mesh>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshStandardMaterial
          color="#140000"
          roughness={0.04}
          metalness={0.97}
          emissive="#cc0000"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Wireframe shell slightly larger */}
      <mesh>
        <icosahedronGeometry args={[2.6, 1]} />
        <meshBasicMaterial color="#D00000" wireframe transparent opacity={0.07} />
      </mesh>

      {/* Orbit ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[4.4, 0.04, 8, 120]} />
        <meshBasicMaterial color="#D00000" transparent opacity={0.22} />
      </mesh>

      {/* Orbit ring 2 — tilted */}
      <mesh ref={ring2Ref} rotation={[1.1, 0.4, 0]}>
        <torusGeometry args={[5.2, 0.025, 8, 120]} />
        <meshBasicMaterial color="#ff2200" transparent opacity={0.13} />
      </mesh>

      {/* Orbit ring 3 — different tilt */}
      <mesh ref={ring3Ref} rotation={[0.5, 0, 1.2]}>
        <torusGeometry args={[6.2, 0.018, 8, 120]} />
        <meshBasicMaterial color="#aa0000" transparent opacity={0.08} />
      </mesh>
    </group>
  );
};

/* ─── Ambient Particles ─── */
const Particles = ({ count }: { count: number }) => {
  const mesh  = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const [particles] = useState(() =>
    Array.from({ length: count }, () => ({
      t:       Math.random() * 100,
      factor:  20 + Math.random() * 100,
      speed:   0.007 + Math.random() / 220,
      xFactor: -50 + Math.random() * 100,
      yFactor: -50 + Math.random() * 100,
      zFactor: -50 + Math.random() * 100,
      mx: 0,
      my: 0,
    }))
  );

  useFrame((state) => {
    particles.forEach((p, i) => {
      const { factor, speed, xFactor, yFactor, zFactor } = p;
      p.t += speed / 2;
      const t = p.t;
      const a = Math.cos(t) + Math.sin(t) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.max(0.05, Math.cos(t));

      p.mx += (state.pointer.x * 1000 - p.mx) * 0.01;
      p.my += (state.pointer.y * 1000 - p.my) * 0.01;

      dummy.position.set(
        (p.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t)       * factor) / 10,
        (p.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2)   * factor) / 10,
        (p.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3)   * factor) / 10,
      );
      dummy.scale.setScalar(s * 0.75);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      if (mesh.current) mesh.current.setMatrixAt(i, dummy.matrix);
    });

    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
    if (light.current) {
      light.current.position.lerp(
        new THREE.Vector3(state.pointer.x * 22, state.pointer.y * 22, 12),
        0.05
      );
    }
  });

  return (
    <>
      <pointLight ref={light} distance={65} intensity={22} color="#ff2200" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.14, 0]} />
        <meshStandardMaterial
          color="#1a0000"
          roughness={0.04}
          metalness={0.96}
          emissive="#ff1100"
          emissiveIntensity={0.32}
        />
      </instancedMesh>
    </>
  );
};

/* ─── Scene ─── */
const WebGLBackground = () => (
  <div style={{
    position: 'fixed', top: 0, left: 0,
    width: '100vw', height: '100vh',
    zIndex: -1, pointerEvents: 'none',
    background: '#000',
  }}>
    <Canvas
      camera={{ fov: 75, position: [0, 0, 30] }}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.06} />
      <pointLight position={[10,  10, 10]} intensity={0.9}  color="#ffffff" />
      <pointLight position={[-15,-10,  5]} intensity={0.55} color="#D00000" />

      <CentralShape />
      <Particles count={220} />

      <EffectComposer>
        <Bloom luminanceThreshold={0.14} luminanceSmoothing={0.9} intensity={1.3} />
        <Vignette eskil={false} offset={0.14} darkness={1.25} />
      </EffectComposer>
    </Canvas>
  </div>
);

export default WebGLBackground;
