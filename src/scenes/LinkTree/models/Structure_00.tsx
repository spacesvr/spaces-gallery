/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACO_URL } from "spacesvr";

type GLTFResult = GLTF & {
  nodes: {
    structure: THREE.Mesh;
    middleSupports: THREE.Mesh;
    metal: THREE.Mesh;
    glass: THREE.Mesh;
  };
  materials: {
    structure: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/Structure-1607759921/structure_01.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL, DRACO_URL) as GLTFResult;
  // materials["glass.mat"].metalness = 1;
  // materials["glass.mat"].roughness = 0;
  // materials["glass.mat"].transparent = false;
  // materials["skylight.mat"].metalness = 1;
  // materials["skylight.mat"].roughness = 0;
  // materials["skylight.mat"].transparent = false;
  //
  // materials["vent.mat"].metalness = 0.87;
  // materials["vent.mat"].roughness = 0.22;
  // materials["windows.mat"].metalness = 0.87;
  // materials["windows.mat"].roughness = 0.22;

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          name="structure"
          material={materials.structure}
          geometry={nodes.structure.geometry}
        />
        <mesh
          name="middleSupports"
          material={materials.structure}
          geometry={nodes.middleSupports.geometry}
        />
        <mesh
          name="metal"
          material={materials.metal}
          geometry={nodes.metal.geometry}
        />
        <mesh
          name="glass"
          material={materials.glass}
          geometry={nodes.glass.geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL, DRACO_URL);
