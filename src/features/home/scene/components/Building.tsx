import { useState } from "react";
import { IBuilding } from "types";

import { BuildingTooltip } from "./BuildingTooltip";
import { Plane } from "./Plane";
import { Polyline } from "./Polyline";

interface BuildingProps {
  building: IBuilding;
}
export const Building = ({ building }: BuildingProps) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <group
      onPointerOver={() => setIsHighlighted(true)}
      onPointerOut={() => setIsHighlighted(false)}
    >
      <BuildingTooltip building={building} />

      {building.items.map((parts) => (
        <group key={`${building.tags.name}-${parts.tags.type}`}>
          {parts.items.map((part, i) => (
            <group key={`${building.tags.name}-${parts.tags.type}-${i}`}>
              {parts.tags.type === "floors" ? (
                part.items?.map((polygon) => (
                  <Plane
                    key={`${building.tags.name}-floor-${i}`}
                    points={polygon.points}
                    color={isHighlighted ? "#98beff" : "grey"}
                  />
                ))
              ) : (
                <>
                  <Plane
                    key={`plane-${parts.tags.type}`}
                    points={part.points}
                    color={parts.tags.type === "roof" ? "lightgrey" : "grey"}
                  />
                  <Polyline
                    key={`polyline-${parts.tags.type}`}
                    points={part.points}
                    color={isHighlighted ? "#98beff" : "lightgrey"}
                  />
                </>
              )}
            </group>
          ))}
        </group>
      ))}
    </group>
  );
};
