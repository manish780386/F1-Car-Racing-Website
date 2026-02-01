import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function SimpleF1Car({ speed, carRef, setLap }) {
  const angle = useRef(0);
  const lastLap = useRef(0);
  const radius = 6;

  useFrame(() => {
    angle.current += 0.01 * speed;

    const x = Math.cos(angle.current) * radius;
    const z = Math.sin(angle.current) * radius;

    carRef.current.position.set(x, 0.3, z); // 🔥 FIX
    carRef.current.rotation.y = -angle.current + Math.PI / 2;

    const currentLap = Math.floor(angle.current / (Math.PI * 2));
    if (currentLap > lastLap.current) {
      lastLap.current = currentLap;
      setLap(currentLap);
    }
  });

  return (
    <group ref={carRef}>
      {/* Body */}
      <mesh>
        <boxGeometry args={[2.5, 0.5, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Wheels */}
      {[[-1, -0.3, 0.6], [-1, -0.3, -0.6], [1, -0.3, 0.6], [1, -0.3, -0.6]]
        .map((pos, i) => (
          <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.3, 16]} />
            <meshStandardMaterial color="black" />
          </mesh>
        ))}
    </group>
  );
}
