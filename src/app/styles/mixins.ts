import {css} from 'styled-components';


export const border = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;

export const outline = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;


type Props = { size?: string, weight?: number }


export const OpenSansFont = ({size, weight}: Props) => css`
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: ${({theme}) => size ?? theme.fonts.size.base};
  font-weight: ${({theme}) => weight ?? theme.fonts.weight.regular};
  font-variation-settings:"wdth" 100;
  font-style: normal;
`;

export const RobotoFont = ({size, weight}: Props) => css`
  font-family: "Roboto", sans-serif;
  font-size: ${({theme}) => size ?? theme.fonts.size.base};
  font-weight: ${({theme}) => weight ?? theme.fonts.weight.regular};
  font-style: normal;
`;




