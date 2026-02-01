import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import SimpleF1Car from "../three/SimpleF1Car";
import FollowCamera from "../three/FollowCamera";
import RaceTrack from "../three/RaceTrack";

export default function Home() {
  const carRef = useRef();

  const TOTAL_LAPS = 3;
  const [speed, setSpeed] = useState(1);
  const [lap, setLap] = useState(0);
  const [time, setTime] = useState(0);
  const [finished, setFinished] = useState(false);

  // ⏱ TIMER
  useEffect(() => {
    if (finished) return;
    const t = setInterval(() => setTime((v) => v + 1), 1000);
    return () => clearInterval(t);
  }, [finished]);

  // 🏁 FINISH
  useEffect(() => {
    if (lap >= TOTAL_LAPS && !finished) {
      setFinished(true);
      saveRaceResult();
    }
  }, [lap]);

  const saveRaceResult = async () => {
    await fetch("http://127.0.0.1:8000/api/race/save/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player_name: "Manish",
        laps: lap,
        time: time,
      }),
    });
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      {/* HUD */}
      <div style={{
        position: "absolute",
        top: 20,
        left: 20,
        color: "white",
        zIndex: 10
      }}>
        <h3>⏱ {time}s</h3>
        <h3>🏁 Lap {lap}/{TOTAL_LAPS}</h3>
        {finished && <h2 style={{ color: "yellow" }}>FINISHED</h2>}
      </div>

      <Canvas camera={{ position: [0, 6, 10], fov: 60 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />

        <RaceTrack />

        <SimpleF1Car
          speed={speed}
          carRef={carRef}
          setLap={setLap}
        />

        <FollowCamera target={carRef} speed={speed} />
      </Canvas>
    </div>
  );
}
