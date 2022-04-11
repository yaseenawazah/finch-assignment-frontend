import { css } from "@emotion/css";
import { Html } from "@react-three/drei";
import { Box } from "components/layout";
import { meanBy } from "lodash";
import { useMemo, useState } from "react";
import { IBuilding, Position3D } from "types";

interface Props {
  building: IBuilding;
}

export const BuildingTooltip = ({ building }: Props) => {
  const [occluded, occlude] = useState(false);

  const position: Position3D = useMemo(
    () =>
      building.items
        .filter((parts) => parts.tags.type === "roof")
        .map((roofParts) => roofParts.items)
        .flat()
        .map((roofPoints) => roofPoints.points)
        .flat()
        .reduce(
          (acc, curr, i, arr) => [
            meanBy(arr, (point) => point.x),
            meanBy(arr, (point) => point.y),
            meanBy(arr, (point) => point.z) + 5000,
          ],
          [0, 0, 0]
        ),
    [building]
  );

  const onOcclude = (visible: boolean) => {
    occlude(visible);
    return null;
  };

  return (
    <Html
      position={position}
      occlude
      onOcclude={onOcclude}
      wrapperClass={css({
        transition: "all 0.2s",
        opacity: occluded ? 0 : 1,
        transform: `scale(${occluded ? 0.25 : 1})`,
      })}
    >
      <Box
        styles={{
          background: "black",
          color: "#f0f0f0",
          padding: "2px 10px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25px",
          width: "25px",
        }}
      >
        {building.tags.name}
      </Box>
    </Html>
  );
};
