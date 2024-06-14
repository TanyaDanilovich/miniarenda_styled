import React from 'react';
import styled from 'styled-components';
import {S_Image} from '../../shared/styled/S_Image';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {S_Container} from '../../shared/styled/S_Container';
import {translateAnimation} from '../../app/styles/animation';


type props = {
    mainText: string,
    additionalText: string,
    imgUrl: string
};
export const HeroSlider = ({mainText, additionalText, imgUrl}: props) => {

    return (
        <S_HeroSlider>


            <S_HeroTitle>
                <p>{mainText}</p>
                <p>{additionalText}</p>
            </S_HeroTitle>

            <S_Image src = {imgUrl}/>

        </S_HeroSlider>);
};

const S_HeroSlider = styled.div<{}>`
  height: 100%;
  position: relative;
  overflow: hidden;

  ${S_Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  ${S_Image} {
    display: block;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    //filter: blur(5px);
    //mask-image: linear-gradient(to bottom, black, transparent);
  }


  &:after {
    background-color: rgba(87, 43, 22, 0.5);
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

export const S_HeroTitle = styled(S_Container)`

  color: ${({theme}) => theme.colors.white};
  position: relative;
  font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  line-height: 1.75;


  p {
    position: relative;
  }

  p:nth-child(1) {
    ${translateAnimation({duration: "2s"})};
    font-size: ${({theme}) => theme.fonts.size.h1};
    font-weight: ${({theme}) => theme.fonts.weight.regular};
  }

  p:nth-child(2) {
    ${translateAnimation({delay: "1s", transformType: "translateY", start: "50vh"})};
    color: ${({theme}) => theme.colors.primary};
    font-size: ${getResponsiveSize(12, 32, 360, 768)};
    font-weight: ${({theme}) => theme.fonts.weight.bold};
  }



`