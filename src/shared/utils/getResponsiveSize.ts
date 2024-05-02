//https://msiter.ru/articles/sovremennaya-otzyvchivaya-tipografika-pri-pomoschi-css-clamp

/**
 * @description Defining property sizing for responsive layout
 * @param {number} min size in px
 * @param {number} max size in px
 * @param {number} minViewportWidth
 * @param  {number} maxViewportWidth
 * @returns {string} Expression for responsive layout
 */



import { getRootFontSize } from "./getRootFontSize";
import { decimalRound } from "./decimalRound";

export const getResponsiveSize = (
  minSize: number,
  maxSize: number,
  minViewportWidth: number = 768,
  maxViewportWidth: number = 1600,
): string => {
  const rem = getRootFontSize();

  const v =
    (100 * (maxSize - minSize)) / (maxViewportWidth - minViewportWidth);

  const r =
    (minViewportWidth * maxSize - maxViewportWidth * minSize) /
    (minViewportWidth - maxViewportWidth);

  const minSizeInRem = decimalRound(minSize / rem, 4);
  const relativeValueInRem = decimalRound(r / rem, 4);
  const maxSizeInRem = decimalRound(maxSize / rem, 4);

  return `clamp(${minSizeInRem}rem, ${decimalRound(v, 4)}vw + ${relativeValueInRem}rem, ${maxSizeInRem}rem)`;
};
