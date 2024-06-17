import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {S_Flex} from '../../../shared/styled/S_Flex';
import React from 'react';
import {S_Box} from '../../../shared/styled/S_Box';
import {ImageHover, plainTransition} from '../../../app/styles/mixins';
import {HoverIcons, S_HoverIcons} from '../../../shared/ui/hoverIcons/HoverIcons';
import {S_Image} from '../../../shared/styled/S_Image';
import {ReadMoreButton} from '../../../shared/ui/linkAsButton/ReadMoreButton';


export type ServiceCardData = {
    title: string,
    text: string,
    image: { src: string, alt: string }
}

type props = ServiceCardData & {};
export const ServiceCard = ({title, text, image}: props) => {
    const theme = useTheme()
    return (
        <StyledServiceCard>
            <S_ImageContainer>
                <S_Image src = {image.src} alt = {image.alt}/>
                <HoverIcons secondLink = {""} firstLink = {""}/>
            </S_ImageContainer>

            <S_Flex $gap = {"1rem"} $style = {"margin-top: 1rem"}>
                <FontAwesomeIcon icon = {faFolderOpen} size = {'1x'} color = {theme.colors.primary}/>
                <a href = {""}>Услуги</a>
            </S_Flex>


            <ServiceCardTitle>
                <a href = {''}>{title}</a>
            </ServiceCardTitle>
            <ServiceCardText>
                {text}
            </ServiceCardText>
            <S_Box $marginTop = {"1rem"}>
                <ReadMoreButton/>
            </S_Box>
        </StyledServiceCard>
    );
};

export const StyledServiceCard = styled.article <{}>`
  padding: 1rem;
  margin: 1rem;
  box-shadow: ${({theme}) => theme.shadow.full};
  display: flex;
  flex-direction: column;
  ${ImageHover()};

  ${S_HoverIcons} {
    ${plainTransition()};
    opacity: 0;

    a:first-child {
      left: 0;
    }

    a:last-child {
      right: 0;
    }
  }

  ${S_ImageContainer} {
    ${plainTransition()};
  }

  ${S_ImageContainer}:hover {
    ${S_HoverIcons} {
      opacity: 1;

      a:first-child {
        left: calc(50% - 3rem);
      }

      a:last-child {
        right: calc(50% - 3rem);
      }
    }
  }

  @media ${({theme}) => theme.media.mobile} {
    width: calc(50% - 20px);
    margin: 1rem auto;
  }
  @media ${({theme}) => theme.media.tablet} {
    width: calc(30%);


  }

`;

export const ServiceCardTitle = styled.h3 <{}>`
  color: ${({theme}) => theme.colors.black};
  ${plainTransition()};

  &:hover {
    color: ${({theme}) => theme.colors.primary};
  }


`;

export const ServiceCardText = styled.p<{}>`
  flex-grow: 1`;
