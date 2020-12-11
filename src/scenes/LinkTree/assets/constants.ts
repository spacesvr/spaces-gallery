import { Vector3 } from "three";
import { Keyframe } from "spacesvr";

export const linkPositions = [
  {
    p: new Vector3(-5.5, 4, 1),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 1),
    r: -Math.PI / 2,
  },
  {
    p: new Vector3(-5.5, 4, 17),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 17),
    r: -Math.PI / 2,
  },
  {
    p: new Vector3(-5.5, 4, 33),
    r: Math.PI / 2,
  },
  {
    p: new Vector3(-6.5, 4, 1),
    r: -Math.PI / 2,
  },
];

const DIST = 0.5;
export const keyframes: Keyframe[] = [
  {
    position: linkPositions[1].p.clone().add(new Vector3(DIST, 0, 0)),
    label: "2",
  },
  {
    position: linkPositions[3].p.clone().add(new Vector3(DIST, 0, 0)),
    label: "4",
  },
  {
    position: linkPositions[5].p.clone().add(new Vector3(DIST, 0, 0)),
    label: "6",
  },
  {
    position: linkPositions[4].p.clone().add(new Vector3(-DIST, 0, 0)),
    label: "5",
  },
  {
    position: linkPositions[2].p.clone().add(new Vector3(-DIST, 0, 0)),
    label: "3",
  },
  {
    position: linkPositions[0].p.clone().add(new Vector3(-DIST, 0, 0)),
    label: "1",
  },
];
