import { IBuildings } from "types";

export type BuildingsPayload = {
  width: number;
  height: number;
  roofAngle: number;
}[];

const endpoint =
  "https://cchvf3mkzi.execute-api.eu-west-1.amazonaws.com/dev/build";

export async function fetchBuildings(
  payload: BuildingsPayload | null
): Promise<IBuildings> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  return result;
}
