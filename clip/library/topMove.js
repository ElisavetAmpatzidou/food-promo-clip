import { CSSEffect } from "@donkeyclip/motorcortex";
export const topMove = (top,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        top
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
