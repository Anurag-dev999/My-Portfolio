import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Line } from "@react-three/drei";
import * as THREE from "three";

function GradientWireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color("#00ffd1") }, // Cyber Mint / Cyan
        color2: { value: new THREE.Color("#ff00ea") }, // Vibrant Magenta / Purple
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vPosition;
        
        void main() {
          // Calculate gradient based on position.
          // Map a diagonal vector through the sphere (-1.8 to 1.8 roughly)
          float mixValue = (vPosition.x - vPosition.y + 3.0) / 6.0;
          mixValue = clamp(mixValue, 0.0, 1.0);
          vec3 finalColor = mix(color1, color2, mixValue);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      {/* Outer vibrant geometric wireframe */}
      <mesh ref={meshRef} material={material}>
        <icosahedronGeometry args={[1.8, 3]} />
      </mesh>

      {/* Subtle inner core shadow mapping to give it that deep glow effect */}
      <mesh>
        <sphereGeometry args={[1.75, 32, 32]} />
        <meshBasicMaterial color="#030308" transparent opacity={0.88} />
      </mesh>

      {/* Center point lights for localized ambient glow matching the image */}
      <pointLight color="#00ffd1" intensity={2} distance={8} position={[-2, 2, 1]} />
      <pointLight color="#ff00ea" intensity={2} distance={8} position={[2, -2, 1]} />
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <Stars radius={100} depth={50} count={2500} factor={4} saturation={1} fade speed={0.5} />
      <GradientWireframeSphere />
    </Canvas>
  );
}

