import { useAnalytics } from "services/analytics";
import { StandardEnvironment, Background, Fog } from "spacesvr";
import { Vector3 } from "three";
import Structure from "./models/00";
import * as THREE from "three";

const Starter = () => {
  useAnalytics();

  const INITIAL_POSITION = new Vector3(0, 1, 4);

  return (
    <StandardEnvironment player={{ pos: INITIAL_POSITION }}>
      <Background color={0x000000} />
      {/* <ambientLight intensity={1} />
      <pointLight intensity={1} position={[0.5, 0.5, 0]} /> */}
      {/* <DisplacementMap /> */}
      {/* <Fog color={new THREE.Color(0x000000)} near={0} far={200} /> */}
      <Structure />
    </StandardEnvironment>
  );
};

export default Starter;
