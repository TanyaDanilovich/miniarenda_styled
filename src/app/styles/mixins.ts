import {css} from 'styled-components';


export const border = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;

export const outline = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;


type FontProps = { size?: string, weight?: number }


export const OpenSansFont = ({size, weight}: FontProps) => css`
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: ${({theme}) => size ?? theme.fonts.size.base};
  font-weight: ${({theme}) => weight ?? theme.fonts.weight.regular};
  font-variation-settings: "wdth" 100;
  font-style: normal;
`;

export const RobotoFont = ({size, weight}: FontProps) => css`
  font-family: "Roboto", sans-serif;
  font-size: ${({theme}) => size ?? theme.fonts.size.base};
  font-weight: ${({theme}) => weight ?? theme.fonts.weight.regular};
  font-style: normal;
`;

export const plainTransition = (duration?: string) => css`
  transition: all ${({theme}) => duration ?? theme.duration.short} linear;
`

export const fullAbsoluteElement = (opacity: number = 0.4) => css`

  background: rgba(0, 0, 0, ${opacity});
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
`

