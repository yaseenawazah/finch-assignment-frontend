import { Stack } from "components/layout";
import { Header, Sidebar } from "components/shared";
import { BuildingsProvider } from "features/home/Provider";

import { BuildingsEditor } from "./buildings-editor";
import { Scene } from "./scene";

export const Home = () => {
  return (
    <Stack gap={0}>
      <Header />
      <Stack
        flexDirection="row"
        styles={{
          height: "calc(100vh - 5rem)",
        }}
      >
        <BuildingsProvider>
          <Scene />
          <Sidebar>
            <BuildingsEditor />
          </Sidebar>
        </BuildingsProvider>
      </Stack>
    </Stack>
  );
};
