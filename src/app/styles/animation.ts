import {css, keyframes} from 'styled-components';

type props = {
    start?: string,
    end?: string,
    duration?: string,
    delay?: string,
    transformType?: string
}
export const translateAnimation = ({start, end, transformType, duration, delay}: props) => {

    const animation = keyframes`
      0% {
        transform: ${transformType || "translateX"}(${start || "-100vw"});
        opacity: 0;
      }
      50%{
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