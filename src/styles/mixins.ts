import {css} from 'styled-components';


export const border = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;

export const outline = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;


type Props = { fontColor?: string, size?: string, family?: string, weight?: number }


export const font = ({fontColor, size, family, weight}: Props) => css`
  color: ${({theme}) => fontColor ?? theme.colors.dark};
  font-size: ${({theme}) => size ?? theme.fonts.size.base};
  font-family: ${({theme}) => family ?? theme.fonts.family.base};
  font-weight: ${({theme}) => weight ?? theme.fonts.weight.regular};
`;


