export type Position3D = [number, number, number];

export interface Point {
  x: number;
  y: number;
  z: number;
}

export interface Tags {
  type: "building" | "base" | "floors" | "floor" | "walls" | "roof";
}

export interface BuildingTags extends Tags {
  type: "building";
  area: number;
  name: string;
}

export interface FloorTags extends Tags {
  type: "floor";
  level: number;
  area: number;
}

export interface BuildingPart {
  points: Point[];
  tags: Tags;
  items?: BuildingPart[];
}

export interface BuildingPartGroup {
  items: BuildingPart[];
  tags: Tags;
}

export interface IBuilding {
  items: BuildingPartGroup[];
  tags: BuildingTags;
}

export interface IBuildings {
  items: IBuilding[];
}

export type BuildingAttributes = {
  width: number;
  height: number;
  roofAngle: number;
}[];

// const building = {
//   name: "",
//   area: 0,
//   floors:[floor],
//   walls:[wall],
//   roof:{},
//   base:{},
// }
// const buildings = [building];
