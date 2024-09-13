/**
 * @description Defining property sizing for responsive layout
 * @param {RuleSet | string} start value jf animation
 * @param {RuleSet | string} end value jf animation
 * @param {RuleSet | string} duration
 * @param  {RuleSet | string} delay
 * @param  {RuleSet | string} transformType
 * @param  {boolean | string} isWithOpasity
 * @returns {RuleSet} Return animation
 */

import {RuleSet, css, keyframes} from 'styled-components';

type props = {
    start?: RuleSet | string,
    end?: RuleSet | string,
    duration?: RuleSet | string,
    delay?: RuleSet | string,
    transformType?: RuleSet | string
    isWithOpacity?:boolean
}
export const translateAnimation = ({start, end, transformType, duration, delay, isWithOpacity}: props) => {

    const animation = keyframes`
      0% {
        transform: ${transformType || "translateX"}(${start || "-100vw"});
        opacity: ${isWithOpacity && "0" ||"1"}
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: ${transformType || "translateX"}(${end || "0"});
      }
    `
    return css`
      animation-name: ${animation};
      animation-duration: ${duration || "1s"};
      animation-delay: ${delay || "0"};
      animation-timing-function: ease-out;
      animation-fill-mode: backwards;
    `
}