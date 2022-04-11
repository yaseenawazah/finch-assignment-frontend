import { Line } from "@react-three/drei";
import { Point, Position3D } from "types";

interface Props {
  points: Point[];
  color: string;
}

export const Polyline = ({ points, color }: Props) => {
  const vertices: Position3D[] = points.map((point) => [
    point.x,
    point.y,
    point.z,
  ]);
  return <Line points={vertices} color={color} alphaWrite={false} />;
};
