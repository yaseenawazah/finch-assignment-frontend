import { css, cx } from "@emotion/css";
import { CSSProperties, ReactNode } from "react";

interface Props
  extends Pick<
    CSSProperties,
    | "flexDirection"
    | "alignItems"
    | "gap"
    | "justifyContent"
    | "flexGrow"
    | "flexWrap"
    | "flex"
  > {
  styles?: CSSProperties;
  children?: ReactNode;
  hoverStyles?: CSSProperties;
}

export const Stack = ({
  flexDirection = "column",
  gap = "1rem",
  alignItems,
  justifyContent,
  flex,
  flexGrow,
  flexWrap,
  styles,
  hoverStyles,
  children,
}: Props) => (
  <div
    className={cx(
      css({
        display: "flex",
        flexDirection,
        gap,
        alignItems,
        justifyContent,
        flexGrow,
        flexWrap,
        flex,
        ...styles,
        "&:hover": {
          ...hoverStyles,
        },
      })
    )}
  >
    {children}
  </div>
);

Stack.displayName = "Stack";
