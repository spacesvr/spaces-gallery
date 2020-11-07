/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    PinkJohn: THREE.Mesh;
  };
  materials: {
    PinkJohnMat: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Spaces4_1-1604712981/spacesvr_04.1.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  return (
    <group ref={group} {...props}>
      <group position-y={6.15}>
        <mesh
          material={materials.PinkJohnMat}
          geometry={nodes.PinkJohn.geometry}
          name="PinkJohn"
          rotation={[Math.PI, -Math.PI / 6, Math.PI]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);