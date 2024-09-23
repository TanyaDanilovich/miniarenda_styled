import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {S_Flex} from '../../../shared/styled/S_Flex';
import React from 'react';
import {S_Box} from '../../../shared/styled/S_Box';
import {ImageHover, outline, plainTransition, transitionHoverIcon} from '../../../app/styles/mixins';
import {HoverIcons, S_HoverIcons} from '../../../shared/ui/hoverIcons/HoverIcons';
import {S_Image} from '../../../shared/styled/S_Image';
import {ReadMoreButton} from '../../../shared/ui/linkAsButton/ReadMoreButton';
import {ImageProps} from '../../../shared/types/common.types';


export type ServiceCardData = {
    title: string,
    text: string,
    image: ImageProps,
    typeTitle: string,
    typeUrl: string,
    url: string
}

type props = ServiceCardData & {};
export const ServiceCard = ({title, text, image, typeTitle, typeUrl, url}: props) => {
    const theme = useTheme()
    return (
        <StyledServiceCard>
            <S_ImageContainer>
                <S_Image src = {image.src} alt = {image.alt}/>
                <HoverIcons link = {url} image = {image}/>
            </S_ImageContainer>

            <S_Flex $gap = {"1rem"} $style = {"margin-top: 1rem"}>
                <FontAwesomeIcon icon = {faFolderOpen} size = {'1x'} color = {theme.colors.primary}/>
                <a href = {typeUrl}>{typeTitle}</a>
            </S_Flex>


            <ServiceCardTitle>
                <a href = {url}>{title}</a>
            </ServiceCardTitle>
            <ServiceCardText>
                {text}
            </ServiceCardText>
            <S_Box $marginTop = {"1rem"}>
                <ReadMoreButton url = {url}/>
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

  ${transitionHoverIcon}
  & > ${S_ImageContainer} {
    ${ImageHover};
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
