import {css} from 'styled-components';
import {S_ImageContainer} from '../../shared/styled/S_ImageContainer';
import {S_Image} from '../../shared/styled/S_Image';
import {S_HoverIcons} from '../../shared/ui/hoverIcons/HoverIcons';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {BASE} from '../../shared/constants/constants';


export const border = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;

export const outline = (width: number = 1, color: string = "red") =>
    `border: ${width}px solid ${color};`;

export const plainTransition = (duration?: string) => css`
  transition: all ${({theme}) => duration ?? theme.duration.short} linear;
`


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

export const ImageHover = css`

  &:before {
    ${fullAbsoluteElement()}
    ${plainTransition()};
    z-index: 3;
  }

  &:hover:before {
    opacity: 1;
  }

  & > ${S_Image} {
    transform: scale(1);
    ${plainTransition()};
  }

  &:hover {
    & > ${S_Image} {
      transform: scale(1.2);
      ${plainTransition()};
    }
  }
`

export const sectionMargin = css`
  margin: ${getResponsiveSize(BASE * 1.5, BASE * 3)} auto;
`

export const sectionPadding = css`
  padding-block: 3rem;
`

export const outlinedNestedDiv = css`

  div {
    ${({theme}) => outline(5, theme.colors.red.b400)};
    margin: 5px;
  }

  div div {
    ${({theme}) => outline(10, theme.colors.pink.b400)};
    margin: 5px;
  }

  div div div {
    ${({theme}) => outline(15, theme.colors.purple.b400)};
    margin: 5px;
  }

  div div div div {
    ${({theme}) => outline(20, theme.colors.deeppurple.b400)};
    margin: 5px;
  }

  div div div div div {
    ${({theme}) => outline(25, theme.colors.indigo.b400)};
    margin: 5px;
  }
`

export const outlinedNestedEverything = css`

  * {
    ${({theme}) => outline(2, theme.colors.red.b400)};
    margin: 5px;
  }

  * * {
    ${({theme}) => outline(4, theme.colors.pink.b400)};
    margin: 5px;
  }

  * * * {
    ${({theme}) => outline(6, theme.colors.purple.b400)};
    margin: 5px;
  }

  * * * * {
    ${({theme}) => outline(8, theme.colors.deeppurple.b400)};
    margin: 5px;
  }

  * * * * * {
    ${({theme}) => outline(10, theme.colors.indigo.b400)};
    margin: 5px;
  }
`

export const transitionHoverIcon = css`


  ${S_HoverIcons} {


    a, button {
      opacity: 0;
      ${plainTransition()}
    }

    a {
      left: 0;
    }

    button {
      right: 0;
    }
  }

  ${S_ImageContainer}:hover {
    ${S_HoverIcons} {
      a, button {
        opacity: 1;
      }

      a {
        left: calc(50% - 3rem);
      }

      button {
        right: calc(50% - 3rem);
      }
    }
  }
`