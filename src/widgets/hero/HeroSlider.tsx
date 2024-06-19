import React from 'react';
import styled from 'styled-components';
import {S_Image} from '../../shared/styled/S_Image';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {S_Container} from '../../shared/styled/S_Container';
import {translateAnimation} from '../../app/styles/animation';
import {BREAKPOINTS} from '../../shared/constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {S_ContactUs} from '../../shared/ui/linkAsButton/S_ContactUs';
import {ContactUsButton} from '../../shared/ui/linkAsButton/ContactUsButton';


type props = {
    mainText: string,
    additionalText: string,
    imgUrl: string
};
export const HeroSlider = ({mainText, additionalText, imgUrl}: props) => {

    return (
        <S_HeroSlider>


            <S_HeroTitle>
                <h2>{mainText}</h2>
                <p>{additionalText}</p>
                <p>
                    <FontAwesomeIcon icon = {faPhone} size = {'1x'}/>
                    <a href = "tel:+375296949698">+375 (29) 694-96-98</a>
                    <span>
                        <ContactUsButton/>
                    </span>

                </p>

            </S_HeroTitle>

            <S_Image src = {imgUrl}/>

        </S_HeroSlider>);
};

const S_HeroSlider = styled.article<{}>`
  height: 100%;
  position: relative;
  overflow: hidden;

  ${S_Container} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //gap: 5svw;
    @media screen and (min-width: ${BREAKPOINTS.tablet}) {
      padding-inline: 60px;
    }
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
    font-size: ${getResponsiveSize(12, 32, 360, 768)};
    font-weight: ${({theme}) => theme.fonts.weight.bold};
  }

  p:not(:has(a)) {
    color: ${({theme}) => theme.colors.primary};
    ${translateAnimation({delay: "1.5s", transformType: "translateY", start: "0", duration: "0.4s"})};
  }

  p:has(a) {
    ${translateAnimation({delay: "1.5s", transformType: "translateY", start: "10vh", duration: "0.4s"})};
  }

  p > a {
    display: inline-block;
    text-align: center;
    width: 0;
    height: 0;
    overflow: hidden;


  }

  & h2 {
    ${translateAnimation({duration: "1.3s", delay: "0.5s"})};
    font-size: ${({theme}) => theme.fonts.size.h1};
    font-weight: ${({theme}) => theme.fonts.weight.regular};
    text-align: center;
  }

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    p > a {
      padding: 1rem;
      cursor: pointer;
      height: auto;
      width: fit-content;
    }
  }


`