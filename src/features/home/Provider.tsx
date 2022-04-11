import { fetchBuildings } from "api/buildings";
import { range } from "lodash";
import { ReactNode, useState } from "react";
import { useQuery } from "react-query";
import { BuildingAttributes } from "types";

import { BuildingsContext } from "./context";

const initialData: BuildingAttributes = range(3).map(() => ({
  width: 10000,
  height: 10000,
  roofAngle: 30,
}));

interface Props {
  children: ReactNode;
}

export const BuildingsProvider = ({ children }: Props) => {
  const [buildingAttributes, setBuildingAttributes] =
    useState<BuildingAttributes>(initialData);

  const { data: buildings, isLoading } = useQuery(
    ["buildings", buildingAttributes],
    () => fetchBuildings(buildingAttributes)
  );

  return (
    <BuildingsContext.Provider
      value={{
        buildings,
        buildingAttributes,
        setBuildingAttributes,
        isLoading,
      }}
    >
      {children}
    </BuildingsContext.Provider>
  );
};
