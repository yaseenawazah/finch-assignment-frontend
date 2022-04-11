import {
  Button,
  Collapse,
  Divider,
  Input,
  Loading,
  Row,
} from "@nextui-org/react";
import { Stack } from "components/layout";
import { FormEvent, useState } from "react";

import { useBuildingsContext } from "../context";

interface FormElements extends HTMLFormControlsCollection {
  height: HTMLInputElement;
  width: HTMLInputElement;
  roofAngle: HTMLInputElement;
}

interface BuildingFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const BuildingsEditor = () => {
  const [isEdited, setIsEdited] = useState(false);
  const { buildings, buildingAttributes, setBuildingAttributes, isLoading } =
    useBuildingsContext();

  const buildingsData = buildings?.items.map((building, i) => ({
    name: building.tags.name,
    ...buildingAttributes[i],
  }));

  const onSubmit = (event: FormEvent<BuildingFormElement>, index: number) => {
    event.preventDefault();

    const elements = event.currentTarget;

    const height = parseInt(elements.height.value, 10);
    const width = parseInt(elements.width.value, 10);
    const roofAngle = parseInt(elements.roofAngle.value, 10);

    const newAttributes = buildingAttributes.map((b, i) =>
      i !== index ? b : { height, width, roofAngle }
    );

    setBuildingAttributes(newAttributes);
    setIsEdited(false);
  };

  if (!buildings || isLoading) {
    return (
      <Stack
        justifyContent={"center"}
        alignItems="center"
        styles={{ height: "100%", width: "100%" }}
      >
        <Loading size="lg" type="points" />
      </Stack>
    );
  }

  return (
    <Collapse.Group>
      {buildingsData?.map((building, i) => (
        <Collapse title={`Building ${building.name}`} key={`${building.name}`}>
          <form
            onChange={() => setIsEdited(true)}
            onSubmit={(e: FormEvent<BuildingFormElement>) => onSubmit(e, i)}
          >
            <Stack>
              <Input
                name="height"
                label="Height:"
                initialValue={building.height.toString()}
                type="number"
              />
              <Input
                name="width"
                label="Width:"
                initialValue={building.width.toString()}
                type="number"
              />
              <Input
                name="roofAngle"
                label="Roof angle:"
                initialValue={building.roofAngle.toString()}
                type="number"
              />
              {isEdited && (
                <>
                  <Divider />
                  <Row justify="flex-end">
                    <Button type="submit" size="sm">
                      Save
                    </Button>
                  </Row>
                </>
              )}
            </Stack>
          </form>
        </Collapse>
      ))}
    </Collapse.Group>
  );
};
