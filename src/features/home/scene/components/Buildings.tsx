import { useBuildingsContext } from "features/home/context";

import { Building } from "./Building";

export const Buildings = () => {
  const { buildings } = useBuildingsContext();

  return (
    <>
      {buildings?.items.map((building) => (
        <Building building={building} key={building.tags.name} />
      ))}
    </>
  );
};
