import { css, CSSObject, cx } from "@emotion/css";
import { ReactNode } from "react";

interface Props {
  styles?: CSSObject;
  hoverStyles?: CSSObject;
  children?: ReactNode;
}

export const Box = ({ styles, hoverStyles, children }: Props) => (
  <div
    className={cx(
      css({
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

Box.displayName = "Box";
