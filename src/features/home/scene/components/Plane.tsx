import { DoubleSide } from "three";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Earcut } from "three/src/extras/Earcut";
import { Point } from "types";

interface Props {
  points: Point[];
  color: string;
}

export const Plane = ({ points, color }: Props) => {
  const vertices = points.map((point) => [point.x, point.y, point.z]);
  const triangleIndices = Earcut.triangulate(
    vertices.flat(Infinity),
    undefined,
    3
  );

  const orderedPoints = triangleIndices.map((index: number) => vertices[index]);

  return (
    <mesh>
      <bufferGeometry
        attach="geometry"
        onUpdate={(self) => self.computeVertexNormals()}
      >
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(orderedPoints.flat())}
          count={orderedPoints.flat().length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.75}
        side={DoubleSide}
      />
    </mesh>
  );
};
