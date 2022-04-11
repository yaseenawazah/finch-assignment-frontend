import { createContext, useContext } from "react";
import { BuildingAttributes, IBuildings } from "types";

interface BuildingsContextProps {
  isLoading: boolean;
  buildings: IBuildings | undefined;
  buildingAttributes: BuildingAttributes;
  setBuildingAttributes: (buildingAttributes: BuildingAttributes) => void;
}

export const BuildingsContext = createContext<BuildingsContextProps | null>(
  null
);

export const useBuildingsContext = () => {
  const context = useContext(BuildingsContext);
  if (context === null) {
    throw new Error("useSceneContext must be used within a SceneContext");
  }
  return context;
};
