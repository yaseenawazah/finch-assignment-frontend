import { Stack } from "components/layout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Sidebar = ({ children }: Props) => {
  return (
    <Stack styles={{ width: "30rem", padding: "0 1rem" }}>{children}</Stack>
  );
};
