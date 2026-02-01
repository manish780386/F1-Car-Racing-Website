export default function RaceTrack() {
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      {/* Track */}
      <mesh>
        <ringGeometry args={[5, 7, 64]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Grass */}
      <mesh position={[0, 0, -0.02]}>
        <circleGeometry args={[12, 64]} />
        <meshStandardMaterial color="#1f7a1f" />
      </mesh>
    </group>
  );
}
