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
import {type ImageProps} from '../../shared/types/common.types';
import ResponsiveImage from '../responsiveImage/responsiveImage';
import {S_InnerContainer} from '../../shared/styled/S_InnerContainer';

type props = {
    mainText: string,
    additionalText: string,
    image: ImageProps,
    index: number
};


export const HeroSlide = ({mainText, additionalText, image}: props) => {
    //console.log(image.src);
    return (
        <S_HeroSlide>
            <S_HeroSliderContent>
                <S_InnerContainer $padding = {`${BASE}px`}>
                    <S_HeroTitle>{mainText}</S_HeroTitle>
                    <S_HeroText>{additionalText}</S_HeroText>
                    <S_HeroPhoneWrapper $align = {"center"}>
                        <PhoneLink/>
                        <ContactUsButton title = {"Позвонить"}/>
                    </S_HeroPhoneWrapper>
                </S_InnerContainer>
            </S_HeroSliderContent>

            <ResponsiveImage image = {image}/>

        </S_HeroSlide>);
};

const S_HeroSlide = styled.article<object>`
    flex:0 0 100%; // Важно!
    min-width:0; // Важно!
    position:relative;
    height:100%;
    overflow:hidden;
    padding:0 10px; // Добавьте отступы если нужно
    scroll-snap-align:start; // Для плавного скролла

    ${S_InnerContainer}{
        padding-block:2rem;
        ${translateAnimation({
            duration: "1.3s",
            delay: "0.5s",
            isWithOpacity: true
        })};
        background-color:rgba(3, 14, 39, 0.7);
        border-radius:1.5rem;
    }

    ${S_Image}{
        display:block;
        object-fit:cover;
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
        ${translateAnimation({
            transformType: "scale",
            start: "1.4",
            duration: "3s",
            end: "1"
        })};
        //filter: blur(5px);
        //mask-image: linear-gradient(to bottom, black, transparent);
    }

    &:after{
        background-color:${({theme}) => theme.colors.bg_primary};
        opacity:0.4;
        display:block;
        object-fit:cover;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:-1;
        content:"";
    }
}
`

export const S_HeroSliderContent = styled(S_OuterContainer)`


  display: flex;
  margin-block: auto;

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
  @media screen and (min-width: ${BREAKPOINTS.desktop}) {
    margin-inline: 5vw auto;
  }

`

export const S_HeroTitle = styled.h2`
  ${translateAnimation({
    duration: "1.3s",
    delay: "0.5s",
    isWithOpacity: true
  })};
  font-size: ${({theme}) => theme.fonts.size.h1};
  font-weight: ${({theme}) => theme.fonts.weight.regular};
  text-align: center;
`

export const S_HeroText = styled.p`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${getResponsiveSize(12, 32, 360, 768)};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  text-align: center;
  ${translateAnimation({
    delay: "1.5s", transformType: "translateY", start: "0", duration: "0.4s", isWithOpacity: true
  })};

`

export const S_HeroPhoneWrapper = styled(S_Flex)`
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

  @media ${({theme}) => theme.mediaMinWidth.computer} {
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

    @media ${({theme}) => theme.mediaMinWidth.tablet} {
      width: auto;
      height: auto;
    }
  }
`