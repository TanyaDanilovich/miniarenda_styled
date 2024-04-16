//https://msiter.ru/articles/sovremennaya-otzyvchivaya-tipografika-pri-pomoschi-css-clamp

import { getRootFontSize } from "./getRootFontSize";
import { decimalRound } from "./decimalRound";

export const getResponsiveSize = (
  minFontSize: number,
  maxFontSize: number,
  minViewportWidth: number = 768,
  maxViewportWidth: number = 1600,
): string => {
  const rem = getRootFontSize();

  const v =
    (100 * (maxFontSize - minFontSize)) / (maxViewportWidth - minViewportWidth);

  const r =
    (minViewportWidth * maxFontSize - maxViewportWidth * minFontSize) /
    (minViewportWidth - maxViewportWidth);

  const minFontSizeInRem = decimalRound(minFontSize / rem, 4);
  const relativeValueInRem = decimalRound(r / rem, 4);
  const maxFontSizeInRem = decimalRound(maxFontSize / rem, 4);

  return `clamp(${minFontSizeInRem}rem, ${decimalRound(v, 4)}vw + ${relativeValueInRem}rem, ${maxFontSizeInRem}rem)`;
};
