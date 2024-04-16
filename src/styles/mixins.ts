import {theme} from './Theme.styled';
import {css} from 'styled-components';

export const border = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;

export const outline = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;

export const font = ({color = theme.colors.font_dark,
                         size = theme.fonts.size.base,
                         family=theme.fonts.family.base,
                         weight=theme.fonts.weight.regular
                     }) => css`

  color: ${color};
  font-size: ${size};
  font-family: ${family};
  font-weight: ${weight};
`;



