import styled from "styled-components";
import {S_Image} from '../../shared/styled/S_Image';
import heroImage from '../../assets/images/main-slider/1920px/_DSC2623-1920w.jpg'
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';


export const S_Hero = styled.section<{}>`
  color: ${({theme}) => theme.colors.white};
  z-index: 10;
  height: 50svh;
  background-image: url(${heroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ${S_Image} {

    display: block;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(5px);
    mask-image: linear-gradient(to bottom, black, transparent);
  }

  &:after {
    background-color: rgba(3, 14, 39, 0.5);
    display: block;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    content: "";
  }
`

export const S_HeroTitle = styled.h1<{}>`


  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({theme}) => theme.fonts.size.h1};
  font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  line-height: 1.75;

  span:nth-child(2) {
    font-weight: ${({theme}) => theme.fonts.weight.regular};
  }

  span:nth-child(n+3) {
    color: ${({theme}) => theme.colors.primary};
    font-size: ${getResponsiveSize(15, 32, 360, 768)};
  }
`