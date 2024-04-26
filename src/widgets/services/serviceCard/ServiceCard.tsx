import styled, {useTheme} from 'styled-components';
import {S_ImageContainer} from '../../../shared/styled/S_ImageContainer';
import {Button} from '../../../shared/ui/button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {S_Flex} from '../../../shared/styled/S_Flex';
import React from 'react';
import {S_Box} from '../../../shared/styled/S_Box';
import {ImageHover, plainTransition} from '../../../app/styles/mixins';
import {HoverIcons} from '../../../shared/ui/hoverIcons/HoverIcons';
import {S_Image} from '../../../shared/styled/S_Image';


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
                <Button type = {'read more'}/>
            </S_Box>
        </StyledServiceCard>
    );
};

export const StyledServiceCard = styled.article <{}>`
  padding: 15px;
  box-shadow: ${({theme}) => theme.shadow.full};

  ${ImageHover()}
  a {
    text-transform: uppercase;
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

export const ServiceCardText = styled.p<{}>``;
