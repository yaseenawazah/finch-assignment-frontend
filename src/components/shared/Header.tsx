import { Stack } from "components/layout";
import logo from "logo.svg";

export const Header = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems={"center"}
      styles={{ height: "5rem", padding: "0 3rem" }}
    >
      <Stack styles={{ width: "6rem" }}>
        <img src={logo} alt="Finch3D logo" />
      </Stack>
    </Stack>
  );
};
