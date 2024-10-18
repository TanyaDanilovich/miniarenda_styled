import React from 'react';
import styled, {css} from 'styled-components';
import {S_Image} from '../../shared/styled/S_Image';
import {getResponsiveSize} from '../../shared/utils/getResponsiveSize';
import {S_OuterContainer} from '../../shared/styled/S_OuterContainer';
import {translateAnimation} from '../../app/styles/animation';
import {BASE} from '../../shared/constants/constants';
import {ContactUsButton} from '../../shared/ui/buttons/ContactUsButton';
import {PhoneLink, S_PhoneLink} from '../../shared/ui/phoneLink/PhoneLink';
import {S_Flex} from '../../shared/styled/S_Flex';
import {BREAKPOINTS} from '../../shared/constants/BREAKPOINTS';



type props = {
    mainText: string,
    additionalText: string,
    imgUrl: string
};
export const HeroSlider = ({mainText, additionalText, imgUrl}: props) => {

    return (
        <S_HeroSlider>


            <S_HeroSliderContent>
                <S_HeroTitle>{mainText}</S_HeroTitle>
                <S_HeroText>{additionalText}</S_HeroText>
                <S_HeroPhoneWrapper $align = {"center"}>
                    <PhoneLink/>
                    <ContactUsButton/>
                </S_HeroPhoneWrapper>

            </S_HeroSliderContent>

            <S_Image src = {imgUrl}/>

        </S_HeroSlider>);
};

const S_HeroSlider = styled.article<{}>`
  height: 100%;
  position: relative;
  overflow: hidden;

  ${S_Image} {
    display: block;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    ${translateAnimation({
      transformType: "scale",
      start: "1.4",
      duration: "3s",
      end: "1"
    })};

    //filter: blur(5px);
    //mask-image: linear-gradient(to bottom, black, transparent);
  }

  &:after {
    background-color: ${({theme}) => theme.colors.bg_primary};
    opacity: 0.7;
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

export const S_HeroSliderContent = styled(S_OuterContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
  position: relative;
  font-weight: ${({theme}) => theme.fonts.weight.semiBold};
  line-height: 1.75;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    padding-inline: 60px;
  }


`

export const S_HeroTitle = styled.h2<{}>`
  ${translateAnimation({
    duration: "1.3s",
    delay: "0.5s",
    isWithOpacity: true
  })};
  font-size: ${({theme}) => theme.fonts.size.h1};
  font-weight: ${({theme}) => theme.fonts.weight.regular};
  text-align: center;
`

export const S_HeroText = styled.p<{}>`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${getResponsiveSize(12, 32, 360, 768)};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  ${translateAnimation({
    delay: "1.5s", transformType: "translateY", start: "0", duration: "0.4s", isWithOpacity: true
  })};

`

export const S_HeroPhoneWrapper = styled(S_Flex)<{}>`
  --animation-start: 10vh;
  font-size: ${getResponsiveSize(12, 32, 360, 768)};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  ${translateAnimation({
    delay: "1.5s",
    transformType: "translateY",
    start: css`var(--animation-start)`,
    duration: "0.4s",
    isWithOpacity: true
  })};
  flex-direction: column;
  row-gap: ${getResponsiveSize(BASE / 2, BASE * 1.5, 320, 768)};
  margin-top: ${getResponsiveSize(0, BASE * 4, 320, 1200)};

  @media ${({theme}) => theme.media.computer} {
    --animation-start: 25vh;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    column-gap: 4rem;
  }

  ${S_PhoneLink} {
    text-align: center;
    width: 0;
    height: 0;
    overflow: hidden;
    padding: 0;

    @media ${({theme}) => theme.media.tablet} {
      width: auto;
      height: auto;
    }
  }
`