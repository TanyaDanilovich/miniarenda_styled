import styled, {useTheme} from 'styled-components';
import {ImageContainer} from '../../../shared/styled/ImageContainer';
import {Button} from '../../../shared/ui/button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {Flex} from '../../../shared/styled/Flex';
import React from 'react';
import {StyledBox} from '../../../shared/styled/Box';
import {fullAbsoluteElement, plainTransition} from '../../../app/styles/mixins';
import {HoverIcons} from '../../../shared/ui/hoverIcons/HoverIcons';


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
            <ImageContainer>
                <img src = {image.src} alt = {image.alt}/>
                <HoverIcons secondLink = {""} firstLink = {""}/>
            </ImageContainer>

            <Flex $gap = {"1rem"} $style = {"margin-top: 1rem"}>
                <FontAwesomeIcon icon = {faFolderOpen} size = {'1x'} color = {theme.colors.primary}/>
                <a href = {""}>Услуги</a>
            </Flex>


            <ServiceCardTitle>
                <a href = {''}>{title}</a>
            </ServiceCardTitle>
            <ServiceCardText>
                {text}
            </ServiceCardText>
            <StyledBox $marginTop = {"1rem"}>
                <Button type = {'read more'}/>
            </StyledBox>
        </StyledServiceCard>
    );
};

export const StyledServiceCard = styled.article <{}>`
  padding: 15px;
  box-shadow: ${({theme}) => theme.shadow.full};

  a {
    text-transform: uppercase;
  }

  & div:first-child:before {
    ${fullAbsoluteElement()}
    ${plainTransition()};
    z-index: 3;
  }

  & div:first-child:hover:before {
    opacity: 1;
  }

  & div:first-child {
    img {
      transform: scale(1);
      ${plainTransition()};
    }
  }

  & div:first-child:hover {
    img {
      transform: scale(1.2);
      ${plainTransition()};
    }
  }

`;

export const ServiceCardTitle = styled.h3 <{}>`
  color: ${({theme}) => theme.colors.black};
  ${plainTransition()};

  &:hover {
    color: ${({theme}) => theme.colors.primary};
    ${plainTransition()};
  }
`;

export const ServiceCardText = styled.p
    < {} > `

`
