import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function FollowCamera({ target }) {
  const { camera } = useThree();

  useFrame(() => {
    if (!target.current) return;

    const offset = new THREE.Vector3(0, 4, -8);
    const desired = target.current.position.clone().add(offset);

    camera.position.lerp(desired, 0.1);
    camera.lookAt(target.current.position);
  });

  return null;
}
