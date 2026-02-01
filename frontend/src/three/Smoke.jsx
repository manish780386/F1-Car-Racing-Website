import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Smoke({ speed }) {
  const particles = useRef([]);

  useFrame(() => {
    particles.current.forEach((p) => {
      if (!p) return;
      p.position.z += speed * 0.05;
      p.material.opacity -= 0.01;

      if (p.material.opacity <= 0) {
        p.position.z = -2;
        p.material.opacity = 0.5;
      }
    });
  });

  return (
    <>
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (particles.current[i] = el)}
          position={[Math.random() - 0.5, -0.6, -2]}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial transparent opacity={0.4} color="gray" />
        </mesh>
      ))}
    </>
  );
}
