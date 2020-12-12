/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL, useTrimeshCollision } from "spacesvr";
import { BufferGeometry } from "three";

type GLTFResult = GLTF & {
  nodes: {
    collider: THREE.Mesh;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/CodameCollisions-1607761000/collider.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;

  useTrimeshCollision(
    (nodes.collider.geometry as BufferGeometry).clone().scale(5, 5, 5)
  );

  return (
    <group ref={group} {...props}>
      <group>
        {/*<mesh geometry={nodes.collider.geometry} name="collider" />*/}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
